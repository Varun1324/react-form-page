// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Confetti from "react-confetti";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/college_logo.png";

import { Button, Modal, Box, Typography } from "@mui/material";
// import { storage } from '../../firebase';

// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import "./UserForm.css";
import userimage from "../../assets/user-image.png";

const UserForm = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  // const [isNoChecked, setIsNoChecked] = useState(false);
  // const [isSubFormYesChecked, setIsSubFormYesChecked] = useState(false);
  // const [isSubFormNoChecked, setIsSubFormNoChecked] = useState(false);
  // const [attendees, setAttendees] = useState([
  //   { name: "", relation: "", file: null },
  // ]);

  const handleYesChange = () => {

    navigate("/guestForm");
    // setIsYesChecked(event.target.checked);
    // if (event.target.checked) {
    //   setIsNoChecked(false);
    // }
  };

  const handleNoChange = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  // const handleSubFormYesChange = (event) => {
  //   setIsSubFormYesChecked(event.target.checked);
  //   if (event.target.checked) {
  //     setIsSubFormNoChecked(false);
  //   }
  // };

  // const handleSubFormNoChange = (event) => {
  //   setIsSubFormNoChecked(event.target.checked);
  //   if (event.target.checked) {
  //     setIsSubFormYesChecked(false);
  //   }
  // };

  // const handleAddAttendee = () => {
  //   setAttendees([...attendees, { name: "", relation: "", file: null }]);
  // };

  // const handleRemoveAttendee = (index) => {
  //   setAttendees(attendees.filter((_, i) => i !== index));
  // };

  // const handleAttendeeChange = (index, field, value) => {
  //   const newAttendees = attendees.map((attendee, i) =>
  //     i === index ? { ...attendee, [field]: value } : attendee
  //   );
  //   setAttendees(newAttendees);
  // };

  // const handleFileChange = (index, file) => {
  //   const newAttendees = attendees.map((attendee, i) =>
  //     i === index ? { ...attendee, file } : attendee
  //   );
  //   setAttendees(newAttendees);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const file = attendees[0].file;
  //   const storageRef = ref(storage, `student/${file.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log("Upload is " + progress + "% done");
  //     },
  //     (error) => {
  //       console.log("Error uploading file", error);
  //     },

  //     () => {
  //       console.log("File is being uploaded");
  //       getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //         console.log("File available at", url);
  //       });
  //     }
  //   );
  // };
  return (
    <div className="full-container">
            <div className="college-logo-div">
      <img src={logo} alt="logo" className="college-logo" />
      </div>
      <div className="semi-full-container">
        <div className="main-container">
          <div className="container">
            <div>
              <div className="column-container">
                <img
                  src={userimage}
                  alt="User"
                  style={{ width: "75px", height: "75px" }}
                />
              </div>
              <div className="column-container">
                <h2>Name</h2>
              </div>
              <div className="column-container">
                <p style={{ fontWeight: "bold" }}>Hall Ticket Number</p>
              </div>

              <div className="descp">
                <p>Are you willing to attend?</p>
              </div>
            </div>
            <div className="checkboxes">
              <button className="button-proceed-yes" onClick={handleYesChange}>
                Yes
              </button>
              <button className="button-proceed-no" onClick={handleNoChange}>
                No
              </button>
            </div>
            {
              <>
              
              <Modal
                className="modal-box-size"
                open={modalOpen}
                onClose={handleModalClose}
              >
                
                <Box className="modal-box">
                  <div className="model-div">
                    <Typography
                      id="modal-title"
                      variant="h6"
                      component="h2"
                      style={{ color: "white" }}
                    >
                      Thank you for your response
                    </Typography>
<Confetti tweenDuration={10000} recycle={false} numberOfPieces={1000}/> 
                    <Button
                      className="close-button-modal"
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        marginTop: "10px",
                        fontWeight: "bold",
                      }}
                      onClick={handleModalClose}
                    >
                      <RxCross2 />
                      Close
                    </Button>
                  </div>
                </Box>
              </Modal>
              </>
            }
            {/* {isNoChecked && (
              <div className="submit-btn">
              <button >Confirm</button>
            </div>
            )}
            {isYesChecked && (
              <form className="form-style">
                <div className="column-container">
                  <img
                    src={userimage}
                    alt="User"
                    style={{ width: "75px", height: "75px" }}
                  />
                </div>
                <div className="column-container">
                  <b>Name</b>
                </div>
                <div className="column-container">
                  <p>Hall Ticket Number</p>
                </div>
                <div className="descp">
                  <label>Persons additionally attending with you? </label>
                </div>
                <div className="checkboxes">
                  <label>
                    <input
                      type="checkbox"
                      checked={isSubFormYesChecked}
                      onChange={handleSubFormYesChange}
                      id="subform-yes"
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={isSubFormNoChecked}
                      onChange={handleSubFormNoChange}
                      id="subform-no"
                    />
                    No
                  </label>
                </div>
              </form>
            )} */}
            {/* {isYesChecked && isSubFormNoChecked && (
              <div className="submit-btn">
              <button >Confirm</button>
            </div>
            )}
            {isYesChecked && isSubFormYesChecked && (
              <form onSubmit={handleSubmit}>
                <div className="subform">
                  {attendees.map((attendee, index) => (
                    <div className="sub-container" key={index}>
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => handleRemoveAttendee(index)}
                      >
                        Remove
                      </button>
                      <input
                        type="text"
                        placeholder="Name"
                        value={attendee.name}
                        onChange={(e) =>
                          handleAttendeeChange(index, "name", e.target.value)
                        }
                      />
                      <input
                        type="text"
                        placeholder="Relation"
                        value={attendee.relation}
                        onChange={(e) =>
                          handleAttendeeChange(
                            index,
                            "relation",
                            e.target.value
                          )
                        }
                      />
                      <input
                        placeholder="Upload Image"
                        type="file"
                        onChange={(e) =>
                          handleFileChange(index, e.target.files[0])
                        }
                      />
                    </div>
                  ))}
                  <div className="add-more-btn">
                    <button type="button" onClick={handleAddAttendee}>
                      Add More
                    </button>
                  </div>
                  <div className="submit-btn">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
