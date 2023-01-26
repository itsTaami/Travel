import { Grid } from "@mui/material";
import React from "react";
import Beaches from "../../../data/beach";
import BeachList from "../BeachList";

const BeachMap = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "50px",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        padding: "50px 50px 50px 10px ",
      }}
    >
      {Beaches.map((item) => (
        <BeachList
          key={item.title}
          name={item.title}
          img={item.img}
          rate={item.rate}
        />
      ))}
    </Grid>
  );
};

export default BeachMap;
