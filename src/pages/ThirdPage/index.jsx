import { Grid } from "@mui/material";
import React from "react";

const ThirdPage = () => {
  return (
    <Grid container item lg={12} spacing={2}>
      <Grid lg={3} sm={6} xs={12} item>
        <h1 style={{ background: "green" }}>Block 1</h1>
      </Grid>
      <Grid lg={3} sm={6} xs={12} item>
        <h1 style={{ background: "green" }}>Block 2</h1>
      </Grid>
      <Grid lg={3} sm={6} xs={12} item>
        <h1 style={{ background: "green" }}>Block 3</h1>
      </Grid>
      <Grid lg={3} sm={6} xs={12} item>
        <h1 style={{ background: "green" }}>Block 4</h1>
      </Grid>
      <Grid lg={3} sm={6} xs={12} item>
        <h1 style={{ background: "green" }}>Block 5</h1>
      </Grid>
      <Grid lg={6} sm={6} xs={12} item>
        <h1 style={{ background: "white" }}></h1>
      </Grid>
      <Grid lg={3} sm={6} xs={12} item>
        <h1 style={{ background: "green" }}>Block 6</h1>
      </Grid>
    </Grid>
  );
};

export default ThirdPage;
