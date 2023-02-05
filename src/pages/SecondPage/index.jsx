import { Margin } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import AppSection from "../../components/Appsection";
import Browse from "../../components/Browse";
import Connect from "../../components/Connect";

import Offers from "../../components/Offers";
import Plan from "../../components/Plan";



import Header from "../../components/HeaderSec/index";
import Countries from "../../components/Countries";
import Beach from "../../components/Beach";
import Recently from "../../components/Recently";
import Packages from "../../components/PackagesSec";



const Second = () => {
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
          <Beach />
        </Grid>
        <Grid sx={{ marginLeft: "10%" }}>
          <Recently />
        </Grid>
        <Grid sx={{ marginLeft: "10%" }}>
          <Packages />
        </Grid>
       
        <Grid sx={{ marginLeft: "10%", marginBottom: "5%" }}>
          
        </Grid>
       
        
      </Grid>
  );
};

export default Second;
