import { Grid } from "@mui/material";
import React from "react";
import Locations from "../../../../data/body";
import Item from "../Item";

const Map = () => {
  return (
    <Grid
      sx={{
        display: "flex",

        width: "90%",

        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {Locations.map((item) => (
        <Item key={item.name} name={item.name} pic={item.icon} />
      ))}
    </Grid>
  );
};

export default Map;
