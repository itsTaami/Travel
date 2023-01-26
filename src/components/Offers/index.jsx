import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import OffersMap from "./OffersMap";

const Offers = () => {
  return (
    <Grid
      sx={{
        marginTop: "-4%",
        height: "58vh",
      }}
    >
      <Typography
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#000",
          marginBottom: "50px",
        }}
      >
        Offers
      </Typography>
      <OffersMap />
    </Grid>
  );
};

export default Offers;
