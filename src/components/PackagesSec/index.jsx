import { Grid, Typography } from "@mui/material";
import React from "react";
import PackagesMap from "./PackageMap";

const Packages = () => {
  return (
    <Grid>
      <Typography>All Inclusive Packages</Typography>
      <Grid>
        <PackagesMap />
      </Grid>
    </Grid>
  );
};

export default Packages;
