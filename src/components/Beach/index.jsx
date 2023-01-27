import { Grid, Typography } from "@mui/material";
import React from "react";
import BeachMap from "./BeachMap";

const Beach = () => {
  return (
    <Grid
      sx={{
        marginTop: "-15%",
      }}
    >
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "600",
          color: "#fff",
          marginBottom: "2%",
        }}
      >
        Popular Beach Destinations
      </Typography>
      <BeachMap />
    </Grid>
  );
};

export default Beach;
