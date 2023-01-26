import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const RecentlyList = (props) => {
  return (
    <Box sx={{ height: "700px" }}>
      <Card
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          borderRadius: "25px",
        }}
      >
        <Box sx={{ alignSelf: "center" }}>
          <img src={props.img} width={500} alt="" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "95%",
            background: "aqua",
            alignItems: "center",
            marginTop: "5%",
            marginBottom: "5%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
              }}
            >
              {props.name}
            </Typography>
            <Typography>3 Days 4 Nights</Typography>
          </Box>
          <Box
            sx={{
              width: "100px",
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <StarIcon />
              {props.rate}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "yellow",
            width: "95%",
            marginBottom: "1vw",
          }}
        >
          <Typography>2 Flights</Typography>
          <Typography>1 Hotel</Typography>
          <Typography>2 Transfers</Typography>
          <Typography>4 Activities</Typography>
        </Box>
        <Box
          sx={{
            alignSelf: "self-start",
            background: "purple",
            marginLeft: "0.5vw",
            marginBottom: "1vw",
          }}
        >
          <li>Tour combo with return airport transfer</li>
          <li>City Tour</li>
          <li>Curious Corner</li>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignSelf: "self-start",
            justifyContent: "space-between",
            background: "purple",
            marginLeft: "0.5vw",
            marginBottom: "1vw",
            width: "15vw",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "1.5rem",marginTop:"5%"}} >₹88,952</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "9vw",
            }}
          >
            <Typography sx={{ fontSize: "2rem" }}>₹88,952</Typography>
            <Typography sx={{alignSelf:"flex-end"}}>Per person</Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
export default RecentlyList;
