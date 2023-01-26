import { Grid, Typography } from "@mui/material";
import React from "react";
import Destinations from "../../../../../data/countries";
import CountryList from "../CountryList";

const CountryMap = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        gap: "90px",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        padding: "50px 50px 50px 10px ",
      }}
    >
      {Destinations.map((item) => (
        <CountryList key={item.title} name={item.title} img={item.img} />
      ))}
    </Grid>
  );
};

export default CountryMap;
