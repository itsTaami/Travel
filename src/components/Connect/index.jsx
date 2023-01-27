import { Grid, Typography } from "@mui/material";
import React from "react";
import ConnectMap from "./ConnectMap";

const Connect = () => {
  return (
    <Grid
      sx={{
        marginTop: "2%",
      }}
    >
      <Typography
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#000",
        }}
      >
        Connect with other travelers in our community
      </Typography>
      <ConnectMap />
    </Grid>
  );
};

export default Connect;
