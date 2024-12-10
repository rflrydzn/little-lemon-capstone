import React, { useState } from "react";

const DatePicker = ({ onDateChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Date");
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get the number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Get all the days of the current month
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  const handleDateClick = (day) => {
    const formattedDate = `${day} ${getMonthName(currentMonth)} ${currentYear}`;
    setSelectedDate(formattedDate);
    setIsOpen(false);
    onDateChange(formattedDate);
  };

  const getMonthName = (month) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month];
  };

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        margin: "20px auto",
        fontFamily: "'Karla', sans-serif",
        fontWeight: 700,
      }}
    >
      {/* Dropdown Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: selectedDate === "Date" ? "#EDEFEE" : "#495E57",
          color: selectedDate === "Date" ? "#495E57" : "#fff",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <span style={{ flexGrow: 1, textAlign: "center" }}>{selectedDate}</span>
        <span
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        >
          ▼
        </span>
      </div>

      {/* Date Picker Dropdown */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 10,
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Month and Year Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <button
              onClick={() => changeMonth(-1)}
              style={{
                backgroundColor: "#EDEFEE",
                color: "#495E57",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                padding: "5px 10px",
                borderRadius: "4px",
              }}
            >
              &lt;
            </button>
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>
              {getMonthName(currentMonth)} {currentYear}
            </span>
            <button
              onClick={() => changeMonth(1)}
              style={{
                backgroundColor: "#EDEFEE",
                color: "#495E57",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                padding: "5px 10px",
                borderRadius: "4px",
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
              marginBottom: "5px",
            }}
          >
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Days of the Month */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "5px",
            }}
          >
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`}></div>
            ))}
            {days.map((day) => (
              <div
                key={day}
                onClick={() => handleDateClick(day)}
                style={{
                  padding: "10px",
                  textAlign: "center",
                  cursor: "pointer",
                  borderRadius: "4px",
                  backgroundColor:
                    selectedDate.startsWith(day.toString()) &&
                    selectedDate.includes(getMonthName(currentMonth))
                      ? "#495E57"
                      : "#EDEFEE",
                  color:
                    selectedDate.startsWith(day.toString()) &&
                    selectedDate.includes(getMonthName(currentMonth))
                      ? "#fff"
                      : "#495E57",
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
