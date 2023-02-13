import React from "react";
import { Box, Grid, Typography, Button, Toolbar, styled } from "@mui/material";
import InputBase from "@mui/material/InputBase";
const AppSection = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      color: "white",
    },
  }));
  return (
    <Box
    sx={{
      backgroundImage: "url(./Pics/BG.svg)",
      height: "556px",
      backgroundSize: "cover",
      display: { xs: "none", sm: "flex" },
      padding: "90px 10% 0 8%",
    }}
  >
    <Box sx={{ position: "relative", display: { xs: "none", md: "block" } }}>
      <img src="./Pics/iPhone13.svg" alt="" style={{ borderRadius:"0" }}  />
      {/* <img
        style={{ position: "absolute", left: "13px", top: "11px" }}
        src="./assets/iphoneScreen.svg"
        alt=""
      /> */}
    </Box>
    <Box
      sx={{
        color: "white",
        paddingLeft: "5%",
      }}
    >
      <Typography
        sx={{ fontSize: { xs: "36px", lg: "48px" }, fontWeight: "bold" }}
      >
        Your all-in-one travel app.
      </Typography>
      <Typography sx={{ fontSize: { xs: "20px", lg: "24px" } }}>
        Book flights, hotels, trains & rental cars anywhere in the world in
        just seconds. Get real-time flight updates, travel info, exclusive
        deals, and 30% more Trip Coins only on the app!
      </Typography>
      <Box
        sx={{
          display: "flex",
          marginTop: "5%",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button
            sx={{
              margin: "0",
              textTransform: "none",
              fontSize: "20px",
              color: "white",
              padding: "3px 15px",
              borderRadius: "1rem",
              "&:hover": { background: "rgba(255, 255, 255, 0.4)" },
            }}
          >
            Mobile
          </Button>
          <Button
            sx={{
              margin: "0",
              textTransform: "none",
              fontSize: "20px",
              color: "white",
              padding: "3px 15px",
              borderRadius: "1rem",
              "&:hover": { background: "rgba(255, 255, 255, 0.4)" },
            }}
          >
            Email
          </Button>
          <Typography sx={{ fontSize: "14px", margin: "10px 0" }}>
            Enter your phone number to receive a text with a link to download
            the app.
          </Typography>
          <Grid
            container
            sx={{
              alignItems: "center",
              borderRadius: "1rem",
              background: "rgba(255, 255, 255, 0.4)",
              padding: "8px 16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledInputBase
              sx={{
                background: "transparent",
              }}
              type="search"
              placeholder="+91 Mobile number"
            />
            <Button
              variant="contained"
              sx={{
                "&:hover": { color: "white" },
                color: "#2659C3",
                backgroundColor: "white",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "2rem",
                boxShadow: "none",
                width: "150px",
              }}
            >
              Search
            </Button>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 5%",
          }}
        >
          <Box
            sx={{
              height: "50px",
              borderLeft: "1px solid white",
              opacity: "0.2",
            }}
          ></Box>
          <Box>or</Box>
          <Box
            sx={{
              height: "50px",
              borderLeft: "1px solid white",
              opacity: "0.2",
            }}
          ></Box>
        </Box>
        <Box sx={{display:"flex",  flexDirection:"column", height:"15vh", justifyContent:"space-between"}}>
          <img
            style={{ display: "block" }}
            src="./Pics/playstore.svg"
            alt=""
          />
          <img src="./Pics/appstore.svg" alt="" />
        </Box>
      </Box>
    </Box>
  </Box>
  );
};

export default AppSection;

// import { Button, Grid, Typography } from "@mui/material";

// import { Stack } from "@mui/material";

// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";

// import InputBase from "@mui/material/InputBase";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import Icon from "@mui/material/Icon";
// import TextField from "@mui/material/TextField";

// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import PersonIcon from "@mui/icons-material/Person";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

// const AppSection = () => {
//   return (
//     <Grid>
//       <Grid>
//         <img src="./Pics/IPhone13.svg" alt="" />
//       </Grid>
//       <Grid>
//         <Grid>
//           <Typography>Your all-in-one travel app.</Typography>
//           <Typography>
//             Book flights, hotels, trains & rental cars anywhere in the world in
//             just seconds. Get real-time flight updates, travel info, exclusive
//             deals, and 30% more Trip Coins only on the app!
//           </Typography>
//         </Grid>
//         <Grid>
//           <Button>Mobile</Button>
//           <Button>Email</Button>
//           <Typography>
//             Enter your phone number to receive text with a link to download the
//             app.
//           </Typography>
//           <Box>
//             <Grid
//               sx={{
//                 background: "transparent",
//                 boxShadow: "none",
//                 width: "30%",
//               }}
//             >
//               <Search
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",

//                   borderRadius: "15px",
//                   height: "6vh",
//                 }}
//               >
//                 <Typography sx={{ width: "1px", marginLeft: "2vw" }}>
//                   +91
//                 </Typography>

//                 <StyledInputBase
//                   placeholder="Mobile Number"
//                   inputProps={{ "aria-label": "search" }}
//                   sx={{
//                     boxShadow: "none",
//                     width: "50%",
//                     height: "55px",
//                     color: "white",
//                     marginLeft: "10px",
//                   }}
//                 />

//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     width: "35%",
//                     marginRight: "20px",

//                     color: "white",
//                   }}
//                 >
//                   <Button
//                     variant="contained"
//                     sx={{
//                       background: "white",
//                       color: "#0d6efd",
//                       borderRadius: "20px",
//                       width: "20vw",
//                       height: "4vh",
//                     }}
//                   >
//                     Search
//                   </Button>
//                 </Box>
//               </Search>
//             </Grid>
//           </Box>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default AppSection;
