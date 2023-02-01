import { Grid } from "@mui/material";
import React from "react";
import Package from "../../../data/package";
import PackageList from "../PackageList";

const PackagesMap = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "70px",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        padding: "50px 50px 50px 10px ",
      }}
    >
      {Package.map((item) => (
        <PackageList
          key={item.title}
          name={item.title}
          img={item.img}
          rate={item.rate}
        />
      ))}
    </Grid>
  );
};

export default PackagesMap;
