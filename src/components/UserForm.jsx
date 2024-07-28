// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./UserForm.css";
import userimage from "../assets/user-image.png";

const UserForm = () => {
  const [isYesChecked, setIsYesChecked] = useState(false);
  const [isNoChecked, setIsNoChecked] = useState(false);
  const [isSubFormYesChecked, setIsSubFormYesChecked] = useState(false);
  const [isSubFormNoChecked, setIsSubFormNoChecked] = useState(false);
  const [attendees, setAttendees] = useState([{ name: "", relation: "", file: null }]);

  const handleYesChange = (event) => {
    setIsYesChecked(event.target.checked);
    if (event.target.checked) {
      setIsNoChecked(false);
    }
  };

  const handleNoChange = (event) => {
    setIsNoChecked(event.target.checked);
    if (event.target.checked) {
      setIsYesChecked(false);
      setIsSubFormYesChecked(false);
    }
  };

  const handleSubFormYesChange = (event) => {
    setIsSubFormYesChecked(event.target.checked);
    if (event.target.checked) {
      setIsSubFormNoChecked(false);
    }
  };

  const handleSubFormNoChange = (event) => {
    setIsSubFormNoChecked(event.target.checked);
    if (event.target.checked) {
      setIsSubFormYesChecked(false);
    }
  };

  const handleAddAttendee = () => {
    setAttendees([...attendees, { name: "", relation: "", file: null }]);
  };

  const handleRemoveAttendee = (index) => {
    setAttendees(attendees.filter((_, i) => i !== index));
  };

  const handleAttendeeChange = (index, field, value) => {
    const newAttendees = attendees.map((attendee, i) =>
      i === index ? { ...attendee, [field]: value } : attendee
    );
    setAttendees(newAttendees);
  };

  const handleFileChange = (index, file) => {
    const newAttendees = attendees.map((attendee, i) =>
      i === index ? { ...attendee, file } : attendee
    );
    setAttendees(newAttendees);
  };

  return (
    <div className="full-container">
      <div className="semi-full-container">
        <div className="title">
          <h4>Student Registration Form</h4>
        </div>
        <div className="main-container">
          <div className="container">
            <div className="descp">
              <p>Are you willing to attend?</p>
            </div>
            <div className="checkboxes">
              <label>
                <input
                  type="checkbox"
                  checked={isYesChecked}
                  onChange={handleYesChange}
                  id="cb-yes"
                />
                Yes
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={isNoChecked}
                  onChange={handleNoChange}
                  id="cb-no"
                />
                No
              </label>
            </div>

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
                  <label>Persons additionally attending with you?{" "}</label>
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
            )}

            {isSubFormYesChecked && (
              <form action="">
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
                          handleAttendeeChange(index, "relation", e.target.value)
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
