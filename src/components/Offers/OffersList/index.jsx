import { Box, Grid } from "@mui/material";
import { Button, Card, Typography } from "@mui/material";
import React from "react";

const OfferList = (props) => {
  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          boxShadow: "5px 5px 5px 5px rgba(158,158,158,0.8)",
          padding: "25px",
          gap: "50px",
        }}
      >
        <Box>
          <img src={props.img} alt="" width="450px" />
        </Box>
        <Box
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography sx={{ color: "rgba(158,158,158,0.8)" }}>
            {props.text}
          </Typography>
          <Typography
            style={{
              fontSize: "35px",
              fontWeight: 600,
              color: "#000",
              width: "500px",
            }}
          >
            {props.title}
          </Typography>
          <Typography sx={{ color: "rgba(158,158,158,0.8)" }}>
            {props.text2}
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "#0d6efd",
              color: "#fff",
              borderRadius: "20px",
              width: "40%",
              padding: "13px",
            }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default OfferList;
