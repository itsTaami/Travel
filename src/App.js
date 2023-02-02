import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import { CssBaseline, Modal } from "@mui/material";
// import AuthPage from "./pages/Auth";
import "./App.css";
import Second from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./pages/Navbar";
import Footer from "./components/footer/footer";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8000/signin", {
        email,
        password,
      });
      console.log("SUCCESS", res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      handleClose();
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <div className="App">
      <Router>
        {/* <Navbar
          login={login}
          logout={logout}
          user={user}
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        /> */}
        <Routes>
          {/* <Route path="/login" element={<AuthPage />} /> */}
          {/* <Route path="/login" element={<AuthPage />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<ThirdPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
