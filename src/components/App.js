import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    console.log('Current step:', step);
  }, [step]);

  return (
    <div>
      <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}>
        <Step step={step} handleChange={handleChange} formData={formData} nextStep={nextStep} prevStep={prevStep} />
      </form>
    </div>
  );
};

export default App;
