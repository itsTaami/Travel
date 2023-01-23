import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const CountryList = (props) => {
  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
          position: "relative",
          color: "white",
        }}
      >
        <img src={props.img} alt="" width="500px" height="300px" />
        <Typography
          sx={{
            position: "absolute",
            top: "80%",
            left: 30,
            fontSize: "2rem",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          {props.name}
        </Typography>
      </Box>
    </Grid>
  );
};

export default CountryList;
