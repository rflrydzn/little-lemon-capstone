import React, { useState } from "react";

const TimePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("Time");

  // Time options in a flat array
  const timeOptions = ["5pm", "6pm", "7pm", "8pm", "9pm", "10pm"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (time) => {
    setSelectedTime(time);
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative", width: "300px", margin: "20px auto", fontFamily: "'Karla', sans-serif", fontWeight: 700 }}>
      {/* Dropdown Button */}
      <div
        onClick={toggleDropdown}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 15px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: selectedTime === "Time" ? "#EDEFEE" : "#495E57",
          color: selectedTime === "Time" ? "#495E57" : "#fff",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Drop shadow
        }}
      >
        <span style={{ flex: 1, textAlign: "center" }}>{selectedTime}</span>
        <span
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        >
          ▼
        </span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            margin: 0,
            padding: "0", // No padding
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "0 0 8px 8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Drop shadow
            zIndex: 10,
          }}
        >
          {/* Time Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr", // 2 columns
              width: "100%", // Use the full width
              padding: 0, // Remove padding
              margin: 0, // Remove margins
            }}
          >
            {timeOptions.map((time) => (
              <div
                key={time}
                onClick={() => handleOptionClick(time)}
                style={{
                  padding: "10px 0", // Remove horizontal padding to make it fill the space
                  textAlign: "center",
                  border: "1px dashed #ccc",
                  
                  cursor: "pointer",
                  backgroundColor: selectedTime === time ? "#f0f0f0" : "#EDEFEE",
                  color: "#495E57",
                  display: "flex", // Ensure it stretches full width
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
