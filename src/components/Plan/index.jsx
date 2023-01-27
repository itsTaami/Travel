import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Plan = () => {
  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: "url(./Pics/plan.svg)",
          backgroundSize: "cover",
          height: "60vh",
          width: "80.5%",
          borderRadius: "30px",
        }}
      >
        {/* <img src="./Pics/plan.svg" alt="" width="90%" /> */}
        <Typography
          style={{
            marginTop: "5%",
            marginLeft: "5%",
            fontSize: "4.5rem",
            fontWeight: 700,
            color: "#fff",
            width: "60%",
          }}
        >
          Plan your trip with travel expert
        </Typography>
        <Typography
          style={{
            marginTop: "5%",
            marginLeft: "5%",
            fontSize: "2.8rem",
            fontWeight: 400,
            color: "#fff",
            width: "70%",
          }}
        >
          Our professional advisors can craft your perfect itinerary
        </Typography>
      </Box>
    </Grid>
  );
};

export default Plan;
