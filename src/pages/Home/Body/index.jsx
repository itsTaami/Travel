import React from "react";
// import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchInput from "./Search";
import Text from "./Text";
import Countries from "./Countries";

const Body = () => {
  return (
    <Box
      sx={{
        padding: 15,
        width: "100vw",
        height: "58vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text />
      <SearchInput />
    </Box>
  );
};

export default Body;
