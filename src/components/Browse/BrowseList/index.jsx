import { Box, Grid } from "@mui/material";
import { Button, Card, Typography } from "@mui/material";
import React from "react";

const BrowseList = (props) => {
  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
          position: "relative",
          color: "white",
        }}
      >
        <img src={props.img} alt="" width="530px" height="300px" />
        <Typography
          sx={{
            position: "absolute",
            top: "80%",
            left: 30,
            fontSize: "2rem",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          {props.type}
        </Typography>
      </Box>
    </Grid>

    // <Grid>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "row",
    //       alignItems: "start",
    //       justifyContent: "space-between",
    //       width: "100%",
    //       height: "100%",
    //       borderRadius: "20px",
    //       boxShadow: "5px 5px 5px 5px rgba(158,158,158,0.8)",
    //       padding: "25px",
    //       gap: "50px",
    //     }}
    //   >
    //     <Box>
    //       <img src={props.img} alt="" width="450px" />
    //     </Box>
    //     <Box
    //       sx={{
    //         width: "60%",
    //         height: "100%",
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "space-evenly",
    //       }}
    //     >
    //       <Typography sx={{ color: "rgba(158,158,158,0.8)" }}>
    //         {props.type}
    //       </Typography>
    //     </Box>
    //   </Box>
    // </Grid>
  );
};

export default BrowseList;
