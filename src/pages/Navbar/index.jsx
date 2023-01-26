import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import BasicModal from "../Modal";
import { Link, NavLink } from "react-router-dom";
import { border } from "@mui/system";

const navItems = ["Home", "Stays", "Flights", "Packages"];

const Navbar = () => {
  return (
    <Box sx={{}}>
      <AppBar
        component="nav"
        sx={{
          background: "transparent",
          boxShadow: "none",
          position: "absolute",
          width: "100%",
        }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h4"
            component="div"
            sx={{ width: "65%", marginLeft: "50px" }}
          >
            trxvl.
          </Typography>
          <Divider />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              width: "25%",

              marginRight: "20px",

              justifyContent: "space-around",
            }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
          <Button color="inherit">
            <BasicModal />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
