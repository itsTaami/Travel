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
import Navbar from "../Navbar";
import Body from "./Body";
import Countries from "./Body/Countries";
import Category from "./Category";
import FirstPage from "../FirstPage/index"


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
          <FirstPage/>
          {/* <Grid sx={{ marginLeft: "5%" }}>
            <Category />
          </Grid> */}
        </Grid>
        {/* <Grid sx={{ marginLeft: "5%" }}>
          <Countries />
        </Grid> */}
        {/* <Grid sx={{ marginLeft: "5%" }}>
          <Offers />
        </Grid> */}
        {/* <Grid sx={{ marginLeft: "5%" }}>
          <Browse />
        </Grid> */}
        {/* <Grid sx={{ marginLeft: "5%" }}>
          <Plan />
        </Grid> */}
        {/* <Grid sx={{ marginLeft: "5%", marginBottom: "8%" }}>
          <Connect />
        </Grid> */}
        {/* <Grid>
          <AppSection />
        </Grid> */}
        {/* <Grid>
          <Footer />
        </Grid> */}
        {/* <Button onClick={logOut}>Гарах</Button> */}
      </Grid>
    );
  


};

export default Home;
