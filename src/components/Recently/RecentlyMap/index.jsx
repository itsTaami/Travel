import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import RecentlyList from "../RecentlyList";
import Recently from "../../../data/recently";

const RecentlyMap = () => {
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
      {Recently.map((item) => (
        <RecentlyList
          key={item.title}
          name={item.title}
          img={item.img}
          rate={item.rate}
        />
      ))}
      <Card
        sx={{
          background: "url(./Pics/recentlyBg.svg) no-repeat",
          backgroundSize: "cover",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "25px",
          width: "35%",
          height: "78vh",
        }}
      >
        <Box
          sx={{
            width: "18vw",
            height: "30vh",
            display: "flex",
            alignSelf: "flex-start",
            flexDirection: "column",
            justifyContent: "space-evenly",
            marginTop: "3%",
            marginLeft: "3%",
          }}
        >
          <Typography sx={{ fontSize: "2rem", color: "#fff" }}>
            Summer Bonanza!
          </Typography>
          <Typography sx={{ fontSize: "1.4rem", color: "#fff" }}>
            Enjoy confortable transfers in shared coaches
          </Typography>
          <Typography sx={{ fontSize: "1.4rem", color: "#fff" }}>
            Choose from 5 flights per week
          </Typography>
          <Typography sx={{ fontSize: "1.4rem", color: "#fff" }}>
            Get a free Rapid Antigen Test at selected hotels
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default RecentlyMap;
