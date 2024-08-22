// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from "../../assets/college_logo.svg";
import { useNavigate } from "react-router-dom";
import { GiConfirmed } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
const ConfrimPass = () => {
    const navigate = useNavigate();
  // Retrieve the stored attendees data and parse it
  const attendees = JSON.parse(localStorage.getItem("attendees")) || [];
    const handleReEnter=()=>{
        navigate("/guestForm")
    }
    const handleConfrim=()=>{
        axios
        .post("http://34.132.254.89/insert_guests", attendees)
        .then((response) => {
          console.log(response.status);
          if (response.status === 201) {
            console.log("success");
            navigate("/generatePass");
          } else {
            console.error("Failed to insert guest:", response.data.message);
          }
        })
        .catch((error) => {
          console.error("Error in POST request:", error);
        });

    }
  return (
    <>
      <div className="college-logo-div">
        <img src={logo} alt="logo" className="college-logo" />
      </div>
      <div className="semi-full-container">
        <div className="main-container">
          <div className="container">
            <div className="column-container" style={{ display: "flex", flexDirection: "column" }}>
              <h1>Student Details</h1>
              <ul style={{ listStyleType: "none" }}>
                <li>Student Name: {localStorage.getItem("name")}</li>
                <li>Roll No: {localStorage.getItem("roll_no")}</li>
                <li>Branch: {localStorage.getItem("branch")}</li>
              </ul>
            </div>

            {attendees.length > 0 && (
              <div className="column-container" style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
                <h1>Attendees Details</h1>
                {attendees.map((attendee, index) => (
                  <div key={index} style={{ marginBottom: "15px" }}>
                    <ul style={{ listStyleType: "none" }}>
                      <li>Guest Name: {attendee.guest_name}</li>
                      <li>Relation: {attendee.relation}</li>
                      <li>Phone No: {attendee.phone_no}</li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"15px"}}>
                <button className="button-proceed-yes" onClick={handleConfrim} style={{display:"flex",flexDirection: "row", justifyContent:"center",alignItems:"center",gap:"6px" }}><GiConfirmed /> Confirm</button>
                <button className="button-proceed-yes" onClick={handleReEnter} style={{display:"flex",flexDirection: "row", justifyContent:"center",alignItems:"center",gap:"6px" }}><FaEdit/> Modify</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ConfrimPass
