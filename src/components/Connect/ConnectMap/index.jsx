import { Grid } from "@mui/material";
import React from "react";
import Connect from "../../../data/connect";
import ConnectList from "../ConnectList";

const ConnectMap = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        gap: "3%",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        padding: "10px 10px 10px 10px ",
      }}
    >
      {Connect.map((item) => (
        <ConnectList key={item.title} title={item.title} img={item.img} />
      ))}
    </Grid>
  );
};

export default ConnectMap;
