import { Margin } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";
import Browse from "../../components/Browse";
import Connect from "../../components/Connect";
import Offers from "../../components/Offers";
import Plan from "../../components/Plan";
import Navbar from "../Navbar";

import Body from "./Body";
import Countries from "./Body/Countries";
import Category from "./Category";

const Home = () => {
  return (
    <Grid>
      <Grid
        sx={{
          background: "url(./Pics/BG1.svg) no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        }}
      >
        <Navbar />
        <Body />
        <Category />
      </Grid>
      <Grid sx={{ marginLeft: "5%" }}>
        <Countries />
      </Grid>
      <Grid sx={{ marginLeft: "5%" }}>
        <Offers />
      </Grid>
      <Grid sx={{ marginLeft: "5%" }}>
        <Browse />
      </Grid>
      <Grid sx={{ marginLeft: "5%" }}>
        <Plan />
      </Grid>
      <Grid sx={{ marginLeft: "5%" }}>
        <Connect />
      </Grid>
    </Grid>
  );
};

export default Home;
