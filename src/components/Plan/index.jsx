import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Plan = () => {
  return (
    <Grid
      sx={{
        marginTop: "-7%",
        height: "58vh",
        marginLeft: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
          position: "relative",
          color: "white",
        }}
      >
        <img src="./Pics/plan.svg" alt="" width="90%" />
        <Typography
          style={{
            position: "absolute",
            top: "20%",
            left: 150,
            fontSize: "5.8rem",
            fontWeight: 700,
            color: "#fff",
            width: "55%",
          }}
        >
          Plan your trip with travel expert
        </Typography>
        <Typography
          style={{
            position: "absolute",
            top: "65%",
            left: 150,
            fontSize: "3rem",
            fontWeight: 400,
            color: "#fff",
            width: "55%",
          }}
        >
          Our professional advisors can craft your perfect itinerary
        </Typography>
      </Box>
    </Grid>
  );
};

export default Plan;
