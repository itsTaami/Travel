import { Box, Grid } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";

import Body from "./Body";
import Category from "./Category";





const Home = () => {
  return (
    <Grid>
      <img src="./Pics/BG1.svg" alt="" width={"100%"} />
      <Navbar />
      

      <Body />
  
      <Category/>
    </Grid>
  );
};

export default Home;
