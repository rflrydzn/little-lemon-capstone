import React, { useState } from "react";

const DatePicker = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle the calendar visibility
  const [selectedDate, setSelectedDate] = useState(null); // Store the selected date
  const [currentDate, setCurrentDate] = useState(new Date()); // Store the current date

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get the number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Get all the days of the current month
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  // Change the month (forward/backward)
  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  // Handle date click
  const handleDateClick = (day) => {
    setSelectedDate(day);
    setIsOpen(false); // Close the calendar after selecting a date
  };

  // Get the name of the month
  const getMonthName = (month) => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month];
  };

  return (
    <div
      style={{
        position: "relative",
        width: "300px", // Same size as other components
        margin: "20px auto",
        fontFamily: "'Karla', sans-serif",
        fontWeight: 700,
      }}
    >
      {/* Date Button */}
      <div
        onClick={() => setIsOpen(!isOpen)} // Toggle the calendar on click
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px", // Match padding with other components
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: selectedDate ? "#495E57" : "#EDEFEE", // Olive green if selected
          color: selectedDate ? "#fff" : "#495E57", // White if selected, olive green otherwise
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center", // Centering the text
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Drop shadow
        }}
      >
        <span style={{ flexGrow: 1, textAlign: "center" }}>
          {selectedDate
            ? `${selectedDate} ${getMonthName(currentMonth)} ${currentYear}`
            : "Date"}
        </span>
        <span
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        >
          ▼
        </span>
      </div>

      {/* Calendar (Date Picker) */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%", // Align the calendar just below the Date button
            left: 0,
            zIndex: 10,
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#fff", // White background
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Drop shadow
            padding: "10px",
            display: "grid",
            gridTemplateRows: "auto 1fr", // For month/year section and the grid for days
            gap: "10px",
            width: "100%", // Take up full width of the parent container
            maxWidth: "350px", // Set a max width for the calendar pop-up
          }}
        >
          {/* Month and Year Section */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button
              onClick={() => changeMonth(-1)} // Move to previous month
              style={{
                backgroundColor: "#EDEFEE",
                color: "#495E57",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              &lt;
            </button>
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>
              {getMonthName(currentMonth)} {currentYear}
            </span>
            <button
              onClick={() => changeMonth(1)} // Move to next month
              style={{
                backgroundColor: "#EDEFEE",
                color: "#495E57",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              &gt;
            </button>
          </div>

          {/* Days of the Week */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "5px",
              textAlign: "center",
              fontWeight: "bold",
              color: "#495E57",
            }}
          >
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Empty days before the start of the month */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "5px",
            }}
          >
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div key={index}></div>
            ))}

            {/* Days of the Month */}
            {days.map((day) => (
              <div
                key={day}
                onClick={() => handleDateClick(day)}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  borderRadius: "4px",
                  padding: "10px",
                  backgroundColor: selectedDate === day ? "#495E57" : "#EDEFEE", // Olive green if selected
                  color: selectedDate === day ? "#fff" : "#495E57",
                  transition: "background-color 0.2s ease-in-out",
                }}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
