import { Margin } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import AppSection from "../../components/Appsection";
import Browse from "../../components/Browse";
import Connect from "../../components/Connect";
import Footer from "../../components/footer/index2";
import Offers from "../../components/Offers";
import Plan from "../../components/Plan";
import Navbar from "../../components/Navbar";


import Header from "../../components/HeaderSec/index";
import Countries from "../../components/Countries";


const Home = () => {
  const newLogged = localStorage.getItem("isLogged");
  console.log("Init", newLogged);
  const [isLogged, setIsLogged] = useState(newLogged);
  const logOut = () => {
    localStorage.setItem("isLogged", false);
    setIsLogged(false);
  };

    return (
      <Grid>
        {/* <Typography variant="h1">Тавтай морилно уу</Typography> */}

        <Grid
          sx={{
            background: "url(./Pics/BG1.svg) no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "100vh",
          }}
        >
          <Header/>
        </Grid>
        <Grid sx={{ marginLeft: "10%" }}>
          <Countries />
        </Grid>
        <Grid sx={{ marginLeft: "10%" }}>
          <Offers />
        </Grid>
        <Grid sx={{ marginLeft: "10%" }}>
          <Browse />
        </Grid>
        <Grid >
          <Plan />
        </Grid>
        <Grid sx={{ marginLeft: "10%", marginBottom: "5%" }}>
          <Connect />
        </Grid>
        <Grid>
          <AppSection />
        </Grid>
        
      </Grid>
    );
  


};

export default Home;
