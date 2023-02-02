import { Grid, Stack } from "@mui/material";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const SearchInput = () => {
  return (
    <Grid xs={12} sm={12} md={12} lg={12}>
      <Grid
        sx={{
          background: "transparent",
          background: "yellow",
          opacity: 0.5,
          boxShadow: "none",
          width: "95%",
        }}
      >
        <Search
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "15px",
          }}
        >
          <SearchIconWrapper sx={{ color: "white" }}>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{
              boxShadow: "none",
              width: "30%",
              height: "55px",
              color: "white",
              marginLeft: "10px",
            }}
          />
          {/* <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          /> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",

              width: "55%",
              color: "white",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "14%",
              }}
            >
              <CalendarTodayIcon />
              <Typography>Check in</Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "14%",
              }}
            >
              <CalendarTodayIcon />
              <Typography>Check out</Typography>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",

                width: "19%",
              }}
            >
              <PersonIcon />
              <Typography>1 room,2 adults</Typography>
            </Grid>

            <Button
              variant="contained"
              sx={{
                background: "white",
                color: "#0d6efd",
                borderRadius: "20px",
              }}
            >
              Search
            </Button>
          </Box>
        </Search>
      </Grid>
    </Grid>
  );
};

export default SearchInput;
