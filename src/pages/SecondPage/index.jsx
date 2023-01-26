import { Grid } from "@mui/material";
import React from "react";
import Beach from "../../components/Beach";
import Footer from "../../components/footer";
import Body from "../Home/Body";
import Category from "../Home/Category";
import Navbar from "../Navbar";

const Second = () => {
  return (
    <Grid>
      <Grid
        sx={{
          background: "url(./Pics/secondBG.svg) no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        }}
      >
        <Navbar />
        <Body />
        <Grid sx={{ marginLeft: "5%" }}>
          <Category />
        </Grid>
      </Grid>
      <Grid sx={{ marginLeft: "5%" }}>
        <Beach />
      </Grid>
      <Grid sx={{ marginLeft: "5%" }}>..</Grid>
      <Grid sx={{ marginLeft: "5%" }}>..</Grid>
      <Grid sx={{ marginLeft: "5%" }}>..</Grid>
      <Grid sx={{ marginLeft: "5%", marginBottom: "8%" }}>..</Grid>
      <Grid>...</Grid>
      <Grid>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Second;
