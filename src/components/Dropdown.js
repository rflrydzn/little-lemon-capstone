import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Occasion");

  const options = ["Birthday", "Engagement", "Anniversary"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
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
          textAlign: "center",
          padding: "10px 15px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: selectedOption === "Occasion" ? "#EDEFEE" : "#495E57",
          color: selectedOption === "Occasion" ? "#495E57" : "#fff",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Drop shadow effect
        }}
      >
        <span style={{ flex: 1, textAlign: "center" }}>{selectedOption}</span>
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
            overflow: "hidden",
            zIndex: 10,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Drop shadow effect
          }}
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: "10px 15px",
                borderBottom: "1px dashed #ccc",
                cursor: "pointer",
                backgroundColor: selectedOption === option ? "#f0f0f0" : "#EDEFEE",
                color: "#495E57",
                textAlign: "center",
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

export default Dropdown;
