import { Grid, Box, Typography, Card } from "@mui/material";
import React from "react";

const ConnectList = (props) => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        marginTop: "2%",
      }}
    >
      <Card
        sx={{
          width: "25vw",
          height: "50vh",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "60%",
            marginTop: "4%",
          }}
        >
          <img src={props.img} alt="" width="90%" />
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",

            height: "35%",
            marginLeft: "5%",
          }}
        >
          <Typography
            style={{
              fontSize: "35px",
              fontWeight: 300,
              color: "#000",
            }}
          >
            {props.title}
          </Typography>
          <Typography sx={{ opacity: "0.5" }}>Travel community</Typography>
          <Typography sx={{ opacity: "0.5" }}>155,073 travelers</Typography>
        </Grid>
      </Card>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "75%",
          height: "100%",
          borderRadius: "20px",
          boxShadow: "5px 5px 5px 5px rgba(158,158,158,0.8)",
          paddingTop: "10px",
          gap: "50px",
        }}
      >
        <Box sx={{ alignSelf: "center" }}>
          <img src={props.img} alt="" width="350px" />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            style={{
              fontSize: "35px",
              fontWeight: 600,
              color: "#000",
              width: "500px",
            }}
          >
            {props.title}
          </Typography>
          <Typography>Travel community</Typography>
          <Typography>155,073 travelers</Typography>
        </Box>
      </Box> */}
    </Grid>
  );
};

export default ConnectList;
