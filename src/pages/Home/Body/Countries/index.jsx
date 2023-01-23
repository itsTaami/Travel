import { Grid, Typography } from "@mui/material";
import React from "react";
import CountryMap from "./CountryMap";

const Countries = () => {
  return (
    <Grid
      sx={{
        top: 550,
        marginTop: "-10%",

        left: 0,
        width: "100vw",
        height: "58vh",
      }}
    >
      <Typography
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "30px",
        }}
      >
        Top Vacation Destinations
      </Typography>
      <CountryMap />
    </Grid>
  );
};

export default Countries;
