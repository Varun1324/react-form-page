// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./FormComponent.css";
import BoxSystemProps from '../BoxSystemProps';

const FormComponent = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    navigate("/userForm");
  };

  return (
    <div className="custom-form-container">
      <h1>React Form</h1>
      <BoxSystemProps handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default FormComponent;
