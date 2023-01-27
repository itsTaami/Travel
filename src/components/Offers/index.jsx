import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import OffersMap from "./OffersMap";

const Offers = () => {
  return (
    <Grid>
      <Typography
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#000",
        }}
      >
        Offers
      </Typography>
      <OffersMap />
    </Grid>
  );
};

export default Offers;
