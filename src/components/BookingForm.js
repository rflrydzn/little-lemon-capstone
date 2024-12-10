import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({
  selectedOccasion,
  selectedDate,
  selectedTime,
  selectedDiners,
  selectedSetting,
  onSubmit,
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      specialRequest: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name is required.")
        .max(20, "First Name must be 20 characters or less."),
      lastName: Yup.string()
        .required("Last Name is required.")
        .max(20, "Last Name must be 20 characters or less."),
      email: Yup.string()
        .email("Invalid email address.")
        .required("Email is required."),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must contain only numbers.")
        .required("Phone number is required."),
      specialRequest: Yup.string().max(
        200,
        "Special Request must be 200 characters or less."
      ),
    }),
    onSubmit: (values) => {
      // Pass the form data to the parent component
      onSubmit(values);
    },
  });

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
      <form onSubmit={formik.handleSubmit}>
        {/* First Name */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p style={{ color: "red" }}>{formik.errors.firstName}</p>
          ) : null}
        </div>

        {/* Last Name */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p style={{ color: "red" }}>{formik.errors.lastName}</p>
          ) : null}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
          />
          {formik.touched.email && formik.errors.email ? (
            <p style={{ color: "red" }}>{formik.errors.email}</p>
          ) : null}
        </div>

        {/* Phone Number */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="phone">Phone Number:</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            style={{ width: "100%", padding: "8px", marginBottom: "5px" }}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p style={{ color: "red" }}>{formik.errors.phone}</p>
          ) : null}
        </div>

        {/* Special Request */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="specialRequest">Special Request:</label>
          <textarea
            id="specialRequest"
            name="specialRequest"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.specialRequest}
            style={{ width: "100%", padding: "8px", height: "100px" }}
          />
          {formik.touched.specialRequest && formik.errors.specialRequest ? (
            <p style={{ color: "red" }}>{formik.errors.specialRequest}</p>
          ) : null}
        </div>

        {/* Submit Button */}
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

      {/* Selected Details Section */}
      <div
        style={{
          marginTop: "20px",
          borderTop: "1px solid #ccc",
          paddingTop: "10px",
        }}
      >
        <h4>Selected Details</h4>
        <p>
          <strong>Occasion:</strong> {selectedOccasion}
        </p>
        <p>
          <strong>Date:</strong> {selectedDate}
        </p>
        <p>
          <strong>Time:</strong> {selectedTime}
        </p>
        <p>
          <strong>Number of Diners:</strong> {selectedDiners}
        </p>
        <p>
          <strong>Setting:</strong> {selectedSetting}
        </p>
      </div>
    </div>
  );
};

export default BookingForm;
