import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          ChatifyPro
        </Typography>
        <Button
          color="inherit"
          href="/home"
          sx={{ mx: 1, "&:hover": { textDecoration: "underline" } }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          href="/about-us"
          sx={{ mx: 1, "&:hover": { textDecoration: "underline" } }}
        >
          About Us
        </Button>
        <Button
          color="inherit"
          href="/features"
          sx={{ mx: 1, "&:hover": { textDecoration: "underline" } }}
        >
          Features
        </Button>
        <Button
          color="inherit"
          href="/contact-us"
          sx={{ mx: 1, "&:hover": { textDecoration: "underline" } }}
        >
          Contact Us
        </Button>
        <Button
          color="inherit"
          href="/login"
          sx={{ mx: 1, "&:hover": { textDecoration: "underline" } }}
        >
          Login
        </Button>
        <Button
          color="inherit"
          href="/register"
          sx={{ mx: 1, "&:hover": { textDecoration: "underline" } }}
        >
          Register
        </Button>
        <Button
          color="inherit"
          href="/dashboard"
          sx={{ mx: 1, "&:hover": { textDecoration: "underline" } }}
        >
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

