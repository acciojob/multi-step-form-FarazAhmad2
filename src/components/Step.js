import React from "react";

const Step = ({ step, handleChange, formData }) => {
  if (step === 1) {
    return (
      <div id='step1' className="customer container">
        <h1>Customer Details</h1>
        <label htmlFor="first_name">First Name:</label>
        <input onChange={handleChange} id="first_name" name="first_name" value={formData.first_name} />
        <label htmlFor="last_name">Last Name:</label>
        <input onChange={handleChange} id="last_name" name="last_name" value={formData.last_name} />
      </div>
    );
  } else if (step === 2) {
    return (
      <div id='step2' className="car container">
        <h1>Car Details</h1>
        <label htmlFor="model">Model:</label>
        <input onChange={handleChange} id="model" name="model" value={formData.model} />
        <label htmlFor="car_price">Price:</label>
        <input onChange={handleChange} type="number" id="car_price" name="car_price" value={formData.car_price} />
      </div>
    );
  } else if (step === 3) {
    return (
      <div id='step3' className="payment container">
        <h1>Payment Details</h1>
        <label htmlFor="card_info">Credit Card Number:</label>
        <input type="number" onChange={handleChange} id="card_info" name="card_info" value={formData.card_info} />
        <label htmlFor="expiry_date">Expiration Date:</label>
        <input onChange={handleChange} type="date" id="expiry_date" name="expiry_date" value={formData.expiry_date} />
      </div>
    );
  } else {
    return null;
  }
};

export default Step;
