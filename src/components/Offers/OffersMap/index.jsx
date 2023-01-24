import { ImportExport } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import Offers from "../../../data/offers";
import OfferList from "../OffersList";

const OffersMap = () => {
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
      {Offers.map((item) => (
        <OfferList
          key={item.text}
          text={item.text}
          title={item.title}
          text2={item.text2}
          btn={item.btn}
          img={item.img}
        />
      ))}
    </Grid>
  );
};

export default OffersMap;
