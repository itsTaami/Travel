import React, { Component } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import { createTheme, ThemeProvider } from "@mui/material/styles";

const SignIn = ({ setisSignIn, setUser, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // burtguulhed email pass heregtei (state buyu useState ashgilana). state n huvisagch.
  const [message, setMessage] = useState(true);
  const [status, setStatus] = useState("error");
  const [isAlert, setIsAlert] = useState(false);
  // back aas aldaa irhed hereglegchid haruulna.

  const changeEmail = (e) => {
    console.log("Email", e.target.value);
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    console.log("Password", e.target.value);
    setPassword(e.target.value);
  };
  const handleClick = () => {
    if (email === "" || password === "") {
      setMessage("Хэрэглэгчийн мэдээлэл хоосон байнаа.");
      setIsAlert(true);
      return;
    }

    login(email, password);
  };
  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8000/signin", {
        email,
        password,
      });
      console.log("SUCCESS", res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      //hereglegch amjilltai burtguulsen tohioldold local ruu hadgalna
      setStatus("success");
      setMessage(res.data.message);
      setIsAlert(true);
      setUser(res.data.user);
      // setStatus(true);
      setTimeout(() => {
        handleClose();
      }, 5000);
      handleClose();
    } catch (error) {
      console.log("ERROR", error);
      setStatus("error");
      setMessage(error.response.data.message);
      setIsAlert(true);
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign-In
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={changeEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={changePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  onClick={() => {
                    setisSignIn(false);
                  }}
                >
                  Sign-up
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={isAlert}
          autoHideDuration={3000}
          onClose={() => {
            setIsAlert(false);
          }}
        >
          <Alert severity={status}>{message}</Alert>
        </Snackbar>
      </Container>
    </div>
  );
};

export default SignIn;
