// eslint-disable-next-line no-unused-vars
import React, { useState }  from 'react'
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/college_logo.png";

const GuestForm = () => {
      const [attendees, setAttendees] = useState([
    { name: "", relation: "", file: null },
  ]);
    const handleAddAttendee = () => {
          setAttendees([...attendees, { name: "", relation: "", phoneNumber: "" }]);
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
      
      
        const handleSubmit = (event) => {
          event.preventDefault();
          
        };
  return (
    <>
     
    <div className="full-container">
    <div className="college-logo-div">
      <img src={logo} alt="logo" className="college-logo" />
      </div>
      <div className="semi-full-container">
        <div className="main-container">
          <div className="container">
            <div>
              {/* <div className="column-container">
              </div> */}
              <h1 style={{textAlign:"center"}}>Attendes Details</h1>
              <form onSubmit={handleSubmit}>
                <div className="subform">
                  {attendees.map((attendee, index) => (
                    <div className="sub-container" key={index}>
                     <div className="remove-btn-div">
                     <button
                        type="button"
                        className="remove-btn"
                        onClick={() => handleRemoveAttendee(index)}
                      >
                        <RxCross2 />
                      </button>
                        </div>
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
                        type="text"
                        placeholder="Phone Number"
                        value={attendee.phoneNumber}
                        onChange={(e) =>
                          handleAttendeeChange(
                            index,
                            "phoneNumber",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                  <div className="add-more-btn">
                    
                    <button type="button" onClick={handleAddAttendee}>
                    <FaPlus />   Add More
                    </button>
                  </div>
                  <div className="submit-btn">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>

            </div>
            {
              <>
              
              {/* <Modal
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
              </Modal> */}
              </>
            }
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
export default GuestForm