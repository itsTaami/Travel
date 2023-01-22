import { Box, Grid, Typography } from "@mui/material";

import * as React from "react";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";

import Button from "@mui/material/Button";
import Item from "./Item";
import Map from "./Map";


const Category = () => {
  return (
    <Box
      sx={{
        top: 350,
        position: "absolute",
        padding: 15,
        width: "100vw",
        height: "58vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#fff",
          marginBottom:"30px"
        }}
      >
        Top categories
      </Typography>
      <Map/>
      
      
    </Box>
  );
};

export default Category;
