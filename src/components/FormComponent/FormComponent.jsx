// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./FormComponent.css";
import BoxSystemProps from '../BoxSystemProps';
import logo from "../../assets/college_logo.png";
const FormComponent = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const rollNo=e.target.rollNumberInput.value;
    const aadharNo=e.target.aadharNumberInput.value;
    console.log(rollNo+" "+aadharNo);
    navigate("/userForm");
  };

  return (
    <>
      <div className="college-logo-div">
      <img src={logo} alt="logo" className="college-logo" />
      </div>
    <div className="custom-form-container">
      <h1>Registration</h1>
      <BoxSystemProps handleOnSubmit={handleOnSubmit} />
    </div>
    </>
  );
};

export default FormComponent;
