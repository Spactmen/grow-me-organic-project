import React from "react";
import { Stack, Button } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Stack direction={"column"} alignItems="center" justifyContent="center">
      <p>Navigate to "/login" to login into the Application</p>
      <Button
        type="submit"
        variant="contained"
        //  fullWidth={true}
        size="medium"
        sx={{
          height: "100%",
          margin: "0px auto 0 auto",
          backgroundColor: "black",
          color: "white",
          borderRadius: "20px",
          ":hover": {
            backgroundColor: "white",
            color: "black",
          },
        }}
        onClick={() => (window.location.href = "/login")}
      >
        Go To Login Page
      </Button>
      <p>Navigat to "/second-page" to see the data fetched from api.</p>
      <Button
        type="submit"
        variant="contained"
        // fullWidth={true}
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
        onClick={() => (window.location.href = "/second-page")}
      >
        Go To Second Page
      </Button>
      <p style={{ marginLeft: "50px" }}>
        PS:without login for the first time you can't navigate to second-page.
      </p>
    </Stack>
  );
};

export default Home;
