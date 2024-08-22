// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import "./StudentPass.css";
import { FaGraduationCap } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import college_logo from "../../assets/college_logo.svg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const StudentPass = () => {
  const [guestData, setGuestData] = useState([]);
  const pdfGenerated = useRef(false);
  useEffect(() => {
    axios
      .get("http://34.132.254.89/get_attendees", {
        params: {
          roll_no: localStorage.getItem("roll_no"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setGuestData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error in GET request:", error);
      });

    const data = localStorage.getItem("guestData");
    if (data) {
      setGuestData(JSON.parse(data));
    }
    if (!pdfGenerated.current && guestData.length > 0) {
      handlePrint();
      pdfGenerated.current = true; // Set flag to true after PDF generation
    }
  }, [guestData]);

  const handlePrint = () => {
    const capture = document.querySelector(".printer");
    const button = document.querySelector("button");
    const passContainers = document.querySelectorAll(".generate-pass-sub-container");

    // Apply temporary styles for PDF generation
    capture.style.backgroundColor = "white";
    capture.style.display = "flex";
    capture.style.flexDirection = "row";
    capture.style.justifyContent = "center";
    capture.style.alignItems = "center";
    button.style.display = "none";
    capture.style.paddingTop="5rem";
    capture.style.width = "180%";

    // Apply styles for the pass containers to make them side by side
    passContainers.forEach((container) => {
        container.style.width = "45%";
    });

    // Capture the content and generate the PDF
    html2canvas(capture).then((canvas) => {
        // Compress the image by reducing quality
        const imgData = canvas.toDataURL("image/jpeg", 0.5); // Reduce the quality to 50%
        const doc = new jsPDF("l", "em", "a4");

        // Calculate the size and position of the image on the PDF
        const imgWidth = doc.internal.pageSize.getWidth();
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Add the image with compression settings
        doc.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight, undefined, "FAST"); // Use "FAST" for compression

        // Save the PDF
        doc.save("receipt.pdf");

        // Restore original styles after generating the PDF
        button.style.display = "block";
        capture.style.width = "";
        capture.style.backgroundColor = "";
        capture.style.display = "";
        capture.style.flexDirection = "";
        capture.style.justifyContent = "";
        capture.style.alignItems = "";
        capture.style.paddingTop="";


        // Reset styles for the pass containers
        passContainers.forEach((container) => {
            container.style.width = ""; // Revert to original width
        });
    });
};





  return (
    <>
      <div className="printer">
        <div className="generate-pass-main-container">
          <div className="generate-pass-sub-container">
            <div className="generate-pass-inner-cont">
              <div
                className="generate-pass-college-logo"
                style={{
                  backgroundImage: `url(${college_logo})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="generate-pass-icon">
                <FaGraduationCap
                  style={{ width: "100px", height: "100px" }}
                  className="cap"
                />
                <h1 style={{ fontSize: "1.3rem" }}>Happy Graduation</h1>
              </div>
              <div className="generate-pass-title">
                <h4>STUDENT ENTRY PASS</h4>
              </div>
              <div className="generate-pass-details">
                <span>Name : {localStorage.name}</span>
                <span>Regd No : {localStorage.roll_no}</span>
                <span>Branch : {localStorage.branch}</span>
              </div>
              <div className="generate-pass-note">
                <p>* Please collect entry pass from the security *</p>
              </div>
            </div>
          </div>
        </div>

        {guestData.map((guest, index) => (
          <div key={index} className="generate-pass-main-container">
            <div className="generate-pass-sub-container">
              <div className="generate-pass-inner-cont">
                <div
                  className="generate-pass-college-logo"
                  style={{
                    backgroundImage: `url(${college_logo})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="generate-pass-icon">
                  <HiUserGroup
                    style={{ width: "100px", height: "100px" }}
                    className="cap"
                  />
                </div>
                <div className="generate-pass-title">
                  <h4>GUEST ENTRY PASS</h4>
                </div>
                <div className="generate-pass-details">
                  <span>Student Name : {localStorage.name}</span>
                  <span>Guest Name : {guest.guest_name}</span>
                  <span>Relation : {guest.relation}</span>
                  <span>Student Regd No : {localStorage.roll_no}</span>
                  <span>Phone No : {guest.phone_no}</span>
                </div>
                <div className="generate-pass-note">
                  <p>* Please collect entry pass from the security *</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        <button id="printPDFButton" onClick={handlePrint}>Download Pass</button>
        </div>
    </>
  );
};

export default StudentPass;
