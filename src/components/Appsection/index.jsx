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
    <Grid
      className="teneg"
      sx={{
        background: "url(/Pics/BG.svg) no-repeat ",
        backgroundSize: "cover",
        height: "60vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "5% 0% 0% 15%",
        }}
      >
        <Box
          sx={{
            height: "50.5vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/Pics/IPhone13.svg"
            alt=""
            style={{ borderRadius: "none" }}
          />
        </Box>
        <Box sx={{ width: "60%" }}>
          <Typography
            sx={{ fontSize: "48px", fontWeight: "700", color: "white" }}
          >
            {" "}
            Your all-in-one travel app.
          </Typography>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "400", color: "white" }}
          >
            Book flights, hotels, trains & rental cars anywhere in the world in
            just seconds. Get real-time flight updates, travel info, exclusive
            deals, and 30% more Trip Coins only on the app!
          </Typography>
          <Box sx={{ display: "flex", marginTop: "5%" }}>
            <Grid>
              {" "}
              <Box
                sx={{
                  margin: "5% 0% 3% 0%",
                }}
              >
                <Button
                  sx={{
                    borderRadius: "40px",
                    background: "rgba(255, 255, 255, 0.4);",
                    width: "25%",
                    color: "white",
                    height: "1%",
                    fontSize: "18px",
                    fontWeight: "400",
                    marginRight: "5%",
                    textTransform: "capitalize",
                  }}
                >
                  Mobile
                </Button>
                <Button
                  sx={{
                    borderRadius: "40px",
                    color: "white",
                    width: "25%",
                    height: "1%",
                    fontSize: "18px",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                >
                  Email
                </Button>
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "400", color: "white" }}
                >
                  Enter your phone number to receive a text with a link to
                  download the app.
                </Typography>
              </Box>
              <Box>
                <Grid
                  position="static"
                  sx={{
                    background: "rgba(255, 255, 255, 0.4);",
                    borderRadius: "20px",
                    backdropFilter: "blur(15px)",
                    marginTop: "2%",
                    width: "100%",
                  }}
                >
                  <Toolbar>
                    <Search>
                      <Box
                        sx={{
                          width: "100%",
                          flexDirection: "row",
                          display: "flex",
                          gap: "30%",
                        }}
                      >
                        <StyledInputBase
                          placeholder="+91 Mobile number"
                          inputProps={{ "aria-label": "search" }}
                        />{" "}
                        <Button
                          sx={{
                            borderRadius: "40px",
                            backgroundColor: "white",
                            width: "45%",
                            height: "1%",
                            fontSize: "18px",
                            fontWeight: "400",
                            textTransform: "capitalize",
                          }}
                          color="primary"
                        >
                          Search
                        </Button>
                      </Box>
                    </Search>
                  </Toolbar>
                </Grid>
              </Box>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "0",
                  border: "1px solid #C4C4C4",
                  margin: "3px",
                  display: "inline-block",
                  rotate: "90deg",
                  marginBottom: "30px",
                  marginTop: "40px",
                  opacity: "0.2",
                }}
              ></Box>
              <Box>
                <Typography sx={{ display: "inline-block", color: "white" }}>
                  or
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "50px",
                  height: "0",
                  border: "1px solid #C4C4C4",
                  margin: "3px",
                  display: "inline-block",
                  rotate: "90deg",
                  marginTop: "30px",
                  opacity: "0.2",
                }}
              ></Box>
            </Grid>
            <Box>
              <Box sx={{ marginBottom: "40px" }}>
                <img src="/Pics/playstore.svg" alt="" />
              </Box>

              <img src="/Pics/playstore.svg" alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
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
