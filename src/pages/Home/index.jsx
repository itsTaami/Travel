import { Margin } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";
import Offers from "../../components/Offers";
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
    </Grid>
  );
};

export default Home;
