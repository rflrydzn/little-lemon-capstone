import React, { useState } from "react";

const BookingForm = ({
  selectedOccasion,
  selectedDate,
  selectedTime,
  selectedDiners,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequest: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First Name is required.";
    if (!formData.lastName) errors.lastName = "Last Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.phone) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onSubmit(formData);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h3>Booking Form</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
          />
          {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
          />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Special Requests:</label>
          <textarea
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", height: "100px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#495E57",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Confirm Reservation
        </button>
      </form>
      <div style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
        <h4>Selected Details</h4>
        <p><strong>Occasion:</strong> {selectedOccasion}</p>
        <p><strong>Date:</strong> {selectedDate}</p>
        <p><strong>Time:</strong> {selectedTime}</p>
        <p><strong>Number of Diners:</strong> {selectedDiners}</p>
      </div>
    </div>
  );
};

export default BookingForm;
