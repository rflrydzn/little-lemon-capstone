import React, { useState } from "react";

const DinersPicker = ({ onDinersChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDiners, setSelectedDiners] = useState("Select Diners");

  const dinersOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleDinersClick = (diners) => {
    const text = `${diners} ${diners === 1 ? "Diner" : "Diners"}`;
    setSelectedDiners(text);
    onDinersChange(text);
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
          backgroundColor: selectedDiners === "Select Diners" ? "#EDEFEE" : "#495E57",
          color: selectedDiners === "Select Diners" ? "#495E57" : "#fff",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <span style={{ flex: 1, textAlign: "center" }}>{selectedDiners}</span>
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
            {dinersOptions.map((diners) => (
              <div
                key={diners}
                onClick={() => handleDinersClick(diners)}
                style={{
                  padding: "10px 15px",
                  textAlign: "center",
                  cursor: "pointer",
                  backgroundColor: "#EDEFEE",
                  color: "#495E57",
                  border: "1px dashed #ccc",
                }}
              >
                {diners} {diners === 1 ? "Diner" : "Diners"}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DinersPicker;
