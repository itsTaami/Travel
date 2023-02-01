import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Grid
      container
      item
      lg={12}
      spacing={2}
      sx={{
        background: "#141414",
        color: "white",

        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Grid lg={2} sm={12} xs={12} item sx={{ marginTop: "2%" }}>
        <h1>Trxvl.</h1>
      </Grid>
      <Grid
        lg={2}
        sm={6}
        xs={12}
        item
        sx={{ marginTop: "3%", lineHeight: "5vh" }}
      >
        <li>Seslendirme ve Alt Jazz</li>
        <li>Seslendirme ve Alt Jazz</li>
        <li>Seslendirme ve Alt Jazz</li>
        <li>Seslendirme ve Alt Jazz</li>
      </Grid>
      <Grid
        lg={2}
        sm={6}
        xs={12}
        item
        sx={{ marginTop: "3%", lineHeight: "5vh" }}
      >
        <li>Seslendirme ve Alt Jazz</li>
        <li>Seslendirme ve Alt Jazz</li>
        <li>Seslendirme ve Alt Jazz</li>
      </Grid>
      <Grid
        lg={2}
        sm={6}
        xs={12}
        item
        sx={{ marginTop: "3%", lineHeight: "5vh" }}
      >
        <li>Seslendirme ve Alt Jazz</li>
        <li>Seslendirme ve Alt Jazz</li>
        <li>Seslendirme ve Alt Jazz</li>
      </Grid>
      <Grid
        lg={2}
        sm={6}
        xs={12}
        item
        sx={{ marginTop: "3%", lineHeight: "5vh" }}
      >
        <li>Seslendirme ve Alt Jazz</li>
        <li>Seslendirme ve Alt Jazz</li>
        <li>Seslendirme ve Alt Jazz</li>
      </Grid>
      <Grid
        lg={3}
        sm={6}
        xs={12}
        item
        sx={{ background: "green", marginLeft: "25%" }}
      >
        <Button>Helmet Kod</Button>
      </Grid>
      <Grid lg={3} item sm={6} xs={12}></Grid>
      <Grid lg={1} item sm={6} xs={12} sx={{ marginRight: "15%" }}>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </Grid>
    </Grid>
    // <Grid
    //   sx={{
    //     background: "#141414",
    //     color: "#fff",
    //     display: "flex",
    //   }}
    // >
    //   <Grid
    //     lg={12}
    //     xl={12}
    //     container
    //     item
    //     spacing={3}
    //     sx={{ display: "flex", justifyContent: "center" }}
    //   >
    //     {/* <Grid
    //     xs={12}
    //     sm={12}
    //     md={12}
    //     lg={12}
    //     xl={12}
    //     item
    //     sx={{ marginTop: "3%", background: "green" }}
    //   >
    //     <Typography>Trxvl.</Typography>
    //   </Grid> */}
    //     <Grid
    //       xs={12}
    //       sm={6}
    //       lg={3}
    //       xl={2}
    //       item
    //       sx={{ marginTop: "3%", background: "green" }}
    //     >
    //       <li>Seslendirme ve Alt Jazz</li>
    //       <li>Seslendirme ve Alt Jazz</li>
    //       <li>Seslendirme ve Alt Jazz</li>
    //       <li>Seslendirme ve Alt Jazz</li>
    //       <Button>Helmet Kod</Button>
    //       <Typography>© 1997-2021 Netflix, Inc. i-062d573a0ee099242</Typography>
    //     </Grid>
    //     <Grid
    //       xs={12}
    //       sm={6}
    //       lg={3}
    //       xl={3}
    //       item
    //       sx={{ marginTop: "3%", background: "green" }}
    //     >
    //       <li>Seslendirme ve Alt Jazz</li>
    //       <li>Seslendirme ve Alt Jazz</li>
    //       <li>Seslendirme ve Alt Jazz</li>
    //     </Grid>
    //     <Grid
    //       xs={12}
    //       sm={6}
    //       lg={3}
    //       xl={3}
    //       item
    //       sx={{ marginTop: "3%", background: "green" }}
    //     >
    //       <li>Seslendirme ve Alt Jazz</li>
    //       <li>Seslendirme ve Alt Jazz</li>
    //       <li>Seslendirme ve Alt Jazz</li>
    //     </Grid>
    //     <Grid
    //       xs={12}
    //       sm={6}
    //       lg={3}
    //       xl={3}
    //       item
    //       sx={{ marginTop: "3%", background: "green" }}
    //     >
    //       <li>Seslendirme ve Alt Jazz</li>
    //       <li>Seslendirme ve Alt Jazz</li>
    //       <li>Seslendirme ve Alt Jazz</li>
    //       <FacebookIcon />
    //       <InstagramIcon />
    //       <TwitterIcon />
    //       <YouTubeIcon />
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
};

export default Footer;
