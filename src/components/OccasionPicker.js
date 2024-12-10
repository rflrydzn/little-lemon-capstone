import React, { useState } from "react";

const OccasionPicker = ({ onOccasionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Occasion");

  const options = ["Birthday", "Engagement", "Anniversary"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOccasionChange(option);
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
          backgroundColor: selectedOption === "Occasion" ? "#EDEFEE" : "#495E57",
          color: selectedOption === "Occasion" ? "#495E57" : "#fff",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <span style={{ flex: 1, textAlign: "center" }}>{selectedOption}</span>
        <span style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }}>▼</span>
      </div>

      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            margin: 0,
            padding: 0,
            listStyle: "none",
            border: "1px solid #ccc",
            borderRadius: "0 0 8px 8px",
            backgroundColor: "#fff",
            zIndex: 10,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: "10px 15px",
                cursor: "pointer",
                backgroundColor: selectedOption === option ? "#f0f0f0" : "#EDEFEE",
                color: "#495E57",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OccasionPicker;
