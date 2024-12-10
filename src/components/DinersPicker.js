import React, { useState } from "react";

const DinersPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDiners, setSelectedDiners] = useState("Select Diners");

  // Diners options (1 to 10)
  const dinersOptions = Array.from({ length: 10 }, (_, index) => index + 1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (num) => {
    const dinerText = num === 1 ? `${num} Diner` : `${num} Diners`; // Singular or plural based on the number
    setSelectedDiners(dinerText);
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
          backgroundColor: selectedDiners === "Select Diners" ? "#EDEFEE" : "#495E57",
          color: selectedDiners === "Select Diners" ? "#495E57" : "#fff",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Drop shadow
        }}
      >
        <span style={{ flex: 1, textAlign: "center" }}>{selectedDiners}</span>
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
          {/* Diners Grid (2x5 layout) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr", // 2 columns
              gridTemplateRows: "repeat(5, 1fr)", // 5 rows
              width: "100%", // Use the full width
              padding: 0, // Remove padding
              margin: 0, // Remove margins
            }}
          >
            {dinersOptions.map((num) => (
              <div
                key={num}
                onClick={() => handleOptionClick(num)}
                style={{
                  padding: "10px 0", // No horizontal padding
                  textAlign: "center",
                  border: "1px dashed #ccc",
                  cursor: "pointer",
                  backgroundColor: selectedDiners.startsWith(`${num} Diner`) ? "#f0f0f0" : "#EDEFEE",
                  color: "#495E57",
                  display: "flex", // Ensure it stretches full width
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {num === 1 ? `${num} Diner` : `${num} Diners`}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DinersPicker;
