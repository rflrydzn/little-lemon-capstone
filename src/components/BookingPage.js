import React, { useState } from "react";
import OccasionPicker from "./OccasionPicker";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import DinersPicker from "./DinersPicker";
import BookingForm from "./BookingForm";

function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDiners, setSelectedDiners] = useState("");
  const [selectedSetting, setSelectedSetting] = useState(""); // New state for setting
  const [errors, setErrors] = useState({});

  const handleOccasionChange = (occasion) => setSelectedOccasion(occasion);
  const handleDateChange = (date) => setSelectedDate(date);
  const handleTimeChange = (time) => setSelectedTime(time);
  const handleDinersChange = (diners) => setSelectedDiners(diners);
  const handleSettingChange = (e) => setSelectedSetting(e.target.value); // Handle radio change

  const validateFields = () => {
    const validationErrors = {};
    if (!selectedOccasion) validationErrors.occasion = "Please select an occasion.";
    if (!selectedDate) validationErrors.date = "Please select a date.";
    if (!selectedTime) validationErrors.time = "Please select a time.";
    if (!selectedDiners) validationErrors.diners = "Please select the number of diners.";
    if (!selectedSetting) validationErrors.setting = "Please select a setting (Indoor or Outdoor).";
    return validationErrors;
  };

  const handleReserveTable = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setStep(2); // Proceed to the next step only if all fields are valid
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {step === 1 ? (
        <>
          {/* Occasion Picker */}
          <OccasionPicker onOccasionChange={handleOccasionChange} />
          {errors.occasion && <p style={{ color: "red" }}>{errors.occasion}</p>}

          {/* Date Picker */}
          <DatePicker onDateChange={handleDateChange} />
          {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}

          {/* Time Picker */}
          <TimePicker onTimeChange={handleTimeChange} />
          {errors.time && <p style={{ color: "red" }}>{errors.time}</p>}

          {/* Diners Picker */}
          <DinersPicker onDinersChange={handleDinersChange} />
          {errors.diners && <p style={{ color: "red" }}>{errors.diners}</p>}

          {/* Indoor/Outdoor Setting */}
          <div style={{ marginTop: "20px" }}>
            <h4>Select Setting</h4>
            <div>
              <label>
                <input
                  type="radio"
                  value="Indoor"
                  checked={selectedSetting === "Indoor"}
                  onChange={handleSettingChange}
                  style={{ marginRight: "10px" }}
                />
                Indoor
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="Outdoor"
                  checked={selectedSetting === "Outdoor"}
                  onChange={handleSettingChange}
                  style={{ marginRight: "10px" }}
                />
                Outdoor
              </label>
            </div>
            {errors.setting && <p style={{ color: "red" }}>{errors.setting}</p>}
          </div>

          {/* Reserve a Table Button */}
          <button
            onClick={handleReserveTable}
            style={{
              padding: "10px 20px",
              backgroundColor: "#495E57",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Reserve a Table
          </button>
        </>
      ) : (
        <BookingForm
          selectedOccasion={selectedOccasion}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          selectedDiners={selectedDiners}
          selectedSetting={selectedSetting} // Pass the selected setting
          onSubmit={(formData) => {
            alert("Reservation Confirmed! Thank you for your booking.");
            console.log("Submitted Form Data: ", formData);
          }}
        />
      )}
    </div>
  );
}

export default BookingPage;
