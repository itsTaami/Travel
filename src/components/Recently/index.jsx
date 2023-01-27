import { Grid, Typography } from "@mui/material";
import React from "react";
import BeachMap from "../Beach/BeachMap";
import RecentlyMap from "./RecentlyMap";

const Recently = () => {
  return (
    <Grid sx={{ marginTop: "3%" }}>
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "600",
          color: "#000",
        }}
      >
        Recently Viewed
      </Typography>
      <RecentlyMap />
    </Grid>
  );
};

export default Recently;
