import { Box, Grid, Typography } from "@mui/material";

import * as React from "react";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";

import Button from "@mui/material/Button";
import Item from "./Item";
import Map from "./Map";

const Category = () => {
  return (
    <Grid
      sx={{
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
        Top categories
      </Typography>
      <Map />
    </Grid>
  );
};

export default Category;
