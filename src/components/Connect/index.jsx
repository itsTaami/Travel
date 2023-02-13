import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

const Connect = () => {
  const connects = [
    {
      img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      title: "India",
      text: "155,073",
    },
    {
      img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      title: "Travel Talk",
      text: "155,073",
    },
    {
      img: "./assets/connect3.png",
      title: "Beach",
      text: "155,073",
    },
    {
      img: "./assets/connect4.png",
      title: "Mountains",
      text: "155,073",
    },
    {
      img: "./assets/connect1.png",
      title: "India",
      text: "155,073",
    },
    {
      img: "./assets/connect1.png",
      title: "Travel Talk",
      text: "155,073",
    },
    {
      img: "./assets/connect1.png",
      title: "Beach",
      text: "155,073",
    },
    {
      img: "./assets/connect1.png",
      title: "Mountains",
      text: "155,073",
    },
    {
      img: "./assets/connect1.png",
      title: "Beach",
      text: "155,073",
    },
    {
      img: "./assets/connect1.png",
      title: "Mountains",
      text: "155,073",
    },
  ];
  return (
    <Box >
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#000",
          fontSize: { xs: "28px", md: "32px" },
          marginTop: "3%",
          marginLeft: "1%",
        }}
      >
        Connect with other travelers in our community
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          padding: "5% 0 5% 0%",
          gap: "80px",
          marginBottom: "10vh",
        }}
      >
        {connects.map((connect) => (
          <Box
            sx={{
              borderRadius: "16px",
              width: "352px",
              height: "342px",
              boxShadow: "5px 5px 5px 5px rgba(158,158,158,0.8)",
              gap: "10px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
             
            }}
          >
            <Box>
              <img
                style={{
                  borderRadius: "16px",
                  width: "310px",
                  height: "200px",
                }}
                src={connect.img}
                alt=""
              />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "24px" }}>{connect.title}</Typography>
              <Typography sx={{ opacity: "0.5" }}>Travel community</Typography>
              <Typography sx={{ opacity: "0.5" }}>
                {connect.text + " travelers"}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Connect;
