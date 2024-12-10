import React, { useState } from "react";
import OccasionPicker from "./OccasionPicker"; 
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import DinersPicker from "./DinersPicker";
import BookingForm from "./BookingForm";

function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState("Occasion");
  const [selectedDate, setSelectedDate] = useState("Select Date");
  const [selectedTime, setSelectedTime] = useState("Select Time");
  const [selectedDiners, setSelectedDiners] = useState("Select Number of Diners");

  const handleOccasionChange = (occasion) => setSelectedOccasion(occasion);
  const handleDateChange = (date) => setSelectedDate(date);
  const handleTimeChange = (time) => setSelectedTime(time);
  const handleDinersChange = (diners) => setSelectedDiners(diners);

  const handleFormSubmit = (formData) => {
    alert("Reservation Confirmed! Thank you for your booking.");
    console.log("Submitted Form Data: ", formData);
  };

  return (
    <div style={{ padding: "20px" }}>
      {step === 1 ? (
        <>
          <OccasionPicker onOccasionChange={handleOccasionChange} />
          <DatePicker onDateChange={handleDateChange} />
          <TimePicker onTimeChange={handleTimeChange} />
          <DinersPicker onDinersChange={handleDinersChange} />
          <button
            onClick={() => setStep(2)}
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
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
}

export default BookingPage;
