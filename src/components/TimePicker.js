import React, { useState } from "react";

const TimePicker = ({ onTimeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("Time");

  const timeOptions = ["5pm", "6pm", "7pm", "8pm", "9pm", "10pm"];

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    onTimeChange(time);
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative", width: "300px", margin: "20px auto", fontFamily: "'Karla', sans-serif", fontWeight: 700 }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
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
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <span style={{ flex: 1, textAlign: "center" }}>{selectedTime}</span>
        <span style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }}>▼</span>
      </div>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            margin: 0,
            padding: "0",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "0 0 8px 8px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
            }}
          >
            {timeOptions.map((time) => (
              <div
                key={time}
                onClick={() => handleTimeClick(time)}
                style={{
                  padding: "10px 15px",
                  textAlign: "center",
                  cursor: "pointer",
                  backgroundColor: "#EDEFEE",
                  color: "#495E57",
                  border: "1px dashed #ccc",
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
