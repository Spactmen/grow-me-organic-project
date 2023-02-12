import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import phone2 from "./assets/phone2.png";
import { Grid, Box, Button } from "@mui/material";
import { TextField, FormHelperText, FormControl } from "@mui/material";

const Form: React.FC = () => {
  interface userData {
    name: string;
    phoneNumber: string;
    email: string;
  }


  const [userData, setuserData] = useState<userData>({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const history = useHistory();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setuserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isError = false;
    if (!userData.email) {
      setEmailError(true);
      isError = true;
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      setEmailError(true);
      isError = true;
    } else {
      setEmailError(false);
    }
    if (!userData.name) {
      setNameError(true);
      isError = true;
    } else {
      setNameError(false);
    }

    if (!userData.phoneNumber) {
      setPhoneNumberError(true);
      isError = true;
    } else {
      setPhoneNumberError(false);
    }

    if (!isError) {
      localStorage.setItem("user", JSON.stringify(userData));
      setIsFormSubmitted(true);
    }

  };

  if (isFormSubmitted) {
    history.push("/second-page");
  }

  return (
    <Grid className="loginContainer" container>
      <Grid item xs={6} sx={{ display: { xs: "none", md: "block" } }}>
        <Box className="leftLoginContent" p={1.3}>
          <img src={phone2} className="image" alt="image" />
        </Box>
      </Grid>

      <Grid item xs={12} md={5} sx={{ margin: "auto" }}>
        <form onSubmit={handleSubmit}>
          <Box>
            <h1 className="loginTextHeading">Create an account</h1>
          </Box>
          <Box className="form-area">
            <FormControl className="form-group">
              <TextField
                id="name"
                name="name"
                label="Name"
                type="text"
                className="form-control"
                variant="outlined"
                sx={{ margin: "10px 0 10px 0" }}
                value={userData.name}
                onChange={handleInputChange}
                error={nameError}
                helperText={nameError?"Name is required":""}
              />

            </FormControl>
            <FormControl className="form-group">
              <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                className="form-control"
                variant="outlined"
                sx={{ margin: "10px 0 10px 0" }}
                value={userData.email}
                onChange={handleInputChange}
                error={emailError}
                helperText={emailError?"Email is required":""}
              />

            </FormControl>
            <FormControl className="form-group">
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                type="number"
                className="form-control"
                variant="outlined"
                sx={{ margin: "5px 0 10px 0" }}
                value={userData.phoneNumber}
                onChange={handleInputChange}
                error={phoneNumberError}
                helperText={phoneNumberError?"Phone numver is required":""}
              />

            </FormControl>
            <Box margin={"auto"} sx={{ width: "80%", height: "40px" }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth={true}
                size="medium"
                sx={{
                  height: "100%",
                  margin: "10px auto 0 auto",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "20px",
                  ":hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default Form;
