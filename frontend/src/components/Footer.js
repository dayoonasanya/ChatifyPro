import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        py: 2,
        textAlign: "center",
        mt: 6,
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} ChatifyPro. All rights reserved.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="/login" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Login
        </Link>
        <Link href="/register" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Register
        </Link>
        <Link href="/contact" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Contact Us
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;

