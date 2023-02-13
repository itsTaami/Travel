import { Grid, Typography } from "@mui/material";
import React from "react";
import CountryMap from "./CountryMap";

const Countries = () => {
  return (
    <Grid
      sx={{
        marginTop: "-10%",

        height: "100%",
      }}
    >
      <Typography
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#fff",
        }}
      >
        Top Vacation Destinations
      </Typography>
      <CountryMap />
    </Grid>
  );
};

export default Countries;
