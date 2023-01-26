import { Grid, Typography } from "@mui/material";
import React from "react";
import BrowseMap from "./BrowseMap";

const Browse = () => {
  return (
    <Grid
      sx={{
        marginTop: "-1%",

        height: "58vh",
      }}
    >
      <Typography
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#000",
          marginBottom: "30px",
        }}
      >
        Browse by property type
      </Typography>
      <BrowseMap />
    </Grid>
  );
};

export default Browse;
