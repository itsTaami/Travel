import { ImportExport } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import Browse from "../../../data/browse";
import BrowseList from "../BrowseList";

const BrowseMap = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        gap: "50px",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        padding: "50px 50px 50px 10px ",
      }}
    >
      {Browse.map((item) => (
        <BrowseList key={item.type} type={item.type} img={item.img} />
      ))}
    </Grid>
  );
};

export default BrowseMap;
