// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from "../../assets/college_logo.svg";
import { FaCheckCircle } from "react-icons/fa";

export const AlreadyRegistertedCard = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingBottom:"10rem"
        }}
      >
        <div className="college-logo-div" style={{alignSelf:"center"}}>
          <img src={logo} alt="logo" className="college-logo" />
        </div>
        <div className="custom-form-container">
          <h1 style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",fontSize:"1.3rem",gap:"10px"}}><FaCheckCircle /> Response Submitted</h1>
          <div className="submit-btn">
                    <button type="submit">Download Pass</button>
                  </div>
        </div>
      </div>
    </>
  )
}
