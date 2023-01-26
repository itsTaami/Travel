import { Grid, Typography } from "@mui/material";
import React from "react";
import BeachMap from "./BeachMap";

const Beach = () => {
  return (
    <Grid
      sx={{
        marginTop: "-10%",
        height: "58vh",
      }}
    >
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "600",
          color: "#000",
        }}
      >
        Popular Beach Destinations
      </Typography>
      <BeachMap />
    </Grid>
  );
};

export default Beach;
