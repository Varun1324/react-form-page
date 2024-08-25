// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
// import axios from "axios";
import logo from "../../assets/college_logo.svg";
import { useNavigate } from "react-router-dom";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  FormHelperText,
} from "@mui/material";

const GuestForm = () => {
  const navigate = useNavigate();
  const roll_no = localStorage.getItem("roll_no");

  const [attendees, setAttendees] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleAddAttendee = () => {
    if (attendees.length < 2) {
      // Limit to 2 guests
      setAttendees([
        ...attendees,
        { guest_name: "", relation: "", phone_no: "", roll_no: roll_no },
      ]);
      setErrors([
        ...errors,
        { guest_name: "", relation: "", phone_no: "", roll_no: roll_no },
      ]);
    } else {
      notify();
    }
  };

  const handleRemoveAttendee = (index) => {
    setAttendees(attendees.filter((_, i) => i !== index));
    setErrors(errors.filter((_, i) => i !== index));
  };

  const handleAttendeeChange = (index, field, value) => {
    const newAttendees = attendees.map((attendee, i) =>
      i === index ? { ...attendee, [field]: value } : attendee
    );
    setAttendees(newAttendees);

    const newErrors = errors.map((error, i) =>
      i === index ? { ...error, [field]: "" } : error
    );
    setErrors(newErrors);
  };
  const notify = () => {
    toast.warn("You can only add up to 2 guests.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let valid = true;
    const newErrors = attendees.map((attendee) => {
      const error = {
        guest_name: "",
        relation: "",
        phone_no: "",
        roll_no: roll_no,
      };
      if (!attendee.guest_name) {
        error.guest_name = "Name is required";
        valid = false;
      }
      if (!attendee.relation) {
        error.relation = "Relation is required";
        valid = false;
      }
      if (!attendee.phone_no) {
        error.phone_no = "Phone number is required";
        valid = false;
      } else if (!/^\d{10}$/.test(attendee.phone_no)) {
        error.phone_no = "Phone number must be 10 digits";
        valid = false;
      }
      return error;
    });

    setErrors(newErrors);

    if (valid) {
      localStorage.setItem("attendees", JSON.stringify(attendees))
      navigate("/confrimPass")
      // axios
      //   .post("http://34.132.254.89/insert_guests", attendees)
      //   .then((response) => {
      //     console.log(response.status);
      //     if (response.status === 201) {
      //       console.log("success");
      //       navigate("/generatePass");
      //     } else {
      //       console.error("Failed to insert guest:", response.data.message);
      //     }
      //   })
      //   .catch((error) => {
      //     console.error("Error in POST request:", error);
      //   });

      // Proceed with form submission or other actions
    }
  };

  return (
    <>
      <div className="full-container">
        <ToastContainer
          position="top-center"
          theme="light"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="college-logo-div">
          <img src={logo} alt="logo" className="college-logo" />
        </div>
        <div className="semi-full-container">
          <div className="main-container">
            <div className="container">
              <h1 style={{ textAlign: "center" }}>Attendees Details</h1>
              <ul style={{ fontSize: "0.9rem", textAlign: "justify" }}>
                <li>Tab <span style={{ fontWeight: "bold" }}>"Add More"</span> button to add additional attendees.</li>
                <li>
                  If no attendees are present, please click the <span style={{ fontWeight: "bold" }}>"Submit"</span>button.
                </li>
              </ul>
              <form onSubmit={handleSubmit}>
                <div className="subform">
                  {attendees.map((attendee, index) => (
                    <div className="sub-container" key={index}>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <p style={{ fontWeight: "bold" }}>Guest {index + 1}</p>
                        <div className="remove-btn-div">

                          <button
                            type="button"
                            className="remove-btn"
                            onClick={() => handleRemoveAttendee(index)}
                          >
                            <RxCross2 />
                          </button>
                        </div>
                      </div>
                      <TextField
                        fullWidth
                        label="Name"
                        value={attendee.guest_name}
                        onChange={(e) =>
                          handleAttendeeChange(
                            index,
                            "guest_name",
                            e.target.value
                          )
                        }
                        variant="outlined"
                        error={!!errors[index].guest_name}
                        helperText={errors[index].guest_name}
                      />
                      <FormControl
                        fullWidth
                        error={!!errors[index].relation}
                        margin="normal"
                      >
                        <InputLabel>Relation</InputLabel>
                        <Select
                          value={attendee.relation}
                          label="Relation"
                          onChange={(e) =>
                            handleAttendeeChange(
                              index,
                              "relation",
                              e.target.value
                            )
                          }
                        >
                          <MenuItem value="">Select Relation</MenuItem>
                          <MenuItem value="Parent">Parent</MenuItem>
                          <MenuItem value="Sibling">Sibling</MenuItem>
                          <MenuItem value="Friend">Friend</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Select>
                        {errors[index].relation && (
                          <FormHelperText>
                            {errors[index].relation}
                          </FormHelperText>
                        )}
                      </FormControl>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        value={attendee.phone_no}
                        onChange={(e) =>
                          handleAttendeeChange(
                            index,
                            "phone_no",
                            e.target.value
                          )
                        }
                        variant="outlined"
                        error={!!errors[index].phone_no}
                        helperText={errors[index].phone_no}
                      />
                    </div>
                  ))}
                  <div className="add-more-btn">
                    <button type="button" onClick={handleAddAttendee}>
                      <FaPlus /> Add More
                    </button>
                  </div>
                  <div className="submit-btn">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestForm;
