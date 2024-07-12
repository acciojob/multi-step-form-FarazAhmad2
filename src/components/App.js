import React, { useState } from "react";
import "./../styles/App.css";
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1); // Starts at step 1
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  }); // Initializes form data

  function nextStep() {
    setStep(step + 1);
  }

  function prevStep() {
    setStep(step - 1);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData };
    newData[name] = value;
    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}>
        <Step step={step} handleChange={handleChange} formData={formData} />
        {step !== 1 && (
          <button onClick={prevStep} type="button">
            Back
          </button>
        )}
        {step !== 3 && (
          <button onClick={nextStep} type="button">
            Next
          </button>
        )}
        {step === 3 && (
          <button type="submit">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default App;
