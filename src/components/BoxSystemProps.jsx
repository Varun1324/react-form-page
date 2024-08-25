// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Container,
  Box,
  FormControl,
  InputLabel,
  Input,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

const BoxSystemProps = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [rollNumberError, setRollNumberError] = useState("");
  const [aadharNumberError, setAadharNumberError] = useState("");
  const [rollNumberInput, setRollNumberInput] = useState("");
  const [aadharNumberInput, setAadharNumberInput] = useState("");
  const [branch, setBranch] = useState("Branch");

  const handleRollNumberInputChange = (event) => {
    const rollNoData = event.target.value.toUpperCase();
    setRollNumberInput(rollNoData);
  };

  const notify = () => {
    toast.error("Please Check Credentials", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const notifySuccess = () => {
    toast.success("Login Successful", {
      position: "top-center",
      autoClose: 800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  function transformName(fullName) {
    // Split the full name into individual words
    const nameParts = fullName.split(" ");

    // Determine the number of initials to generate
    const initialsCount = nameParts.length > 1 ? nameParts.length - 1 : 1;

    // Extract the first letter of each of the first `initialsCount` parts
    const initials = nameParts
      .slice(0, initialsCount)
      .map((part) => part[0])
      .join(".");

    // Get the last part of the name
    const lastName = nameParts.slice(initialsCount).join(" ");

    // Combine initials with the last name
    const transformedName = `${initials}. ${lastName}`;

    return transformedName;
  }


  const handleAadharNumberInputChange = (event) => {
    if (event.target.value.length <= 14) {
      let data = event.target.value.replace(/\s/g, ""); // Remove all existing spaces
      let formattedData = "";

      // Add a space after every 4 digits
      for (let i = 0; i < data.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedData += " ";
        }
        formattedData += data[i];
      }

      // Update the input value in the state
      setAadharNumberInput(formattedData);
    }
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const rollNo = rollNumberInput;
    const aadharNo = aadharNumberInput;
    const rollNumberPattern1 = /^21A85A[A-Z0-9]{4}$/;
    const rollNumberPattern2 = /^20A81A[A-Z0-9]{4}$/;
    const rollNumberPattern3 = /^21A81D[A-Z0-9]{4}$/;
    const rollNumberPattern4 = /^22A81D[A-Z0-9]{4}$/;
    const rollNumberPattern5 = /^21A81E[A-Z0-9]{4}$/;
  
    let isValid = true;
  
    // Roll Number Validation
    if (!rollNumberPattern1.test(rollNo) && 
        !rollNumberPattern2.test(rollNo) &&
        !rollNumberPattern3.test(rollNo) &&
        !rollNumberPattern4.test(rollNo) &&
        !rollNumberPattern5.test(rollNo)) {
      setRollNumberError("* Please enter a valid Roll Number");
      isValid = false;
    } else {
      setRollNumberError("");
    }
  
    // Aadhar Number Validation
    if (aadharNo.length !== 14) {
      setAadharNumberError("* Please enter a valid Aadhar Number");
      isValid = false;
    } else {
      setAadharNumberError("");
    }
    if (branch === "Branch") {
      alert("Please select a branch");
      isValid = false;
    }
  
    if (isValid) {
      setLoading(true);
      await axios
        .get("http://34.132.254.89/authenticate", {
          params: {
            roll_no: rollNo,
            aadhar: aadharNo,
            branch: branch,
          },
        })
        .then((response) => {
          
          console.log(response.status);
          if (response.status === 200) {
            notifySuccess()
            setLoading(false);
            const dataReceived = response.data;
            for (let i in dataReceived) {
              if (i === "name") {
                localStorage.setItem("name", transformName(dataReceived[i]));
              } else {
                localStorage.setItem(i, dataReceived[i]);
              }
            }
            setTimeout(()=>{
              navigate("/userForm");
            },1000)
          }
          
        })
        .catch((error) => {
          setLoading(false);
          notify()
          console.error("Error fetching data:", error);
        });
    }
  };
  

  return (
    <Container>
     
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
         <>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Bounce
        />
      </>
        <FormControl
          sx={{
            mb: 2,
            width: "300px",
            "& .MuiInput-underline:after": {
              borderBottomColor: "black",
            },
          }}
        >
          <InputLabel htmlFor="roll-number-input" style={{ color: "black" }}>
            Roll Number
          </InputLabel>
          <Input
            id="roll-number-input"
            aria-describedby="roll-number-helper-text"
            style={{ color: "black" }}
            name="rollNumberInput"
            value={rollNumberInput}
            onChange={handleRollNumberInputChange}
          />
          <p className="required-para-element">{rollNumberError}</p>
        </FormControl>

        <FormControl
          sx={{
            mb: 2,
            width: "300px",
            "& .MuiInput-underline:after": {
              borderBottomColor: "black",
            },
          }}
        >
          <InputLabel htmlFor="aadhar-number-input" style={{ color: "black" }}>
            Aadhar Number
          </InputLabel>
          <Input
            id="aadhar-number-input"
            type="text"
            aria-describedby="aadhar-number-helper-text"
            name="aadharNumberInput"
            style={{ color: "black" }}
            value={aadharNumberInput}
            onChange={handleAadharNumberInputChange}
          />
          <p className="required-para-element">{aadharNumberError}</p>
        </FormControl>

        <FormControl
          sx={{
            mb: 2,
            width: "300px",
            "& .MuiInput-underline:after": {
              borderBottomColor: "black",
            },
          }}
        >
          <Select
            labelId="branch-select-label"
            id="branch-select"
            value={branch}
            onChange={handleBranchChange}
            style={{ color: "black" }}
          >
            <MenuItem value={"Branch"} disabled>
              Branch
            </MenuItem>
            <MenuItem value={"CSE"}>CSE</MenuItem>
            <MenuItem value={"CST"}>CST</MenuItem>

            <MenuItem value={"ECE"}>ECE</MenuItem>
            <MenuItem value={"ECT"}>ECT</MenuItem>

            <MenuItem value={"EEE"}>EEE</MenuItem>
            <MenuItem value={"MECH"}>MECH</MenuItem>
            <MenuItem value={"CIVIL"}>CIVIL</MenuItem>
            <MenuItem value={"MBA"}>MBA</MenuItem>
            <MenuItem value={"MTECH"}>MTECH</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          style={{ backgroundColor: "black" }}
          type="submit"
          onClick={handleSubmit}
        >
          {loading ? <CircularProgress color="inherit" /> : "Submit"}
        </Button>
      </Box>
    </Container>
  );
};

export default BoxSystemProps;
