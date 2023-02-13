import { Grid, Typography } from "@mui/material";
import React from "react";
import PackagesMap from "./PackageMap";

const Packages = () => {
  return (
    <Grid>
      <Typography sx={{
          fontSize: "2rem",
          fontWeight: "600",
          color: "#000",
        }}>All Inclusive Packages !</Typography>
      <Grid>
        <PackagesMap />
      </Grid>
    </Grid>
  );
};

export default Packages;
