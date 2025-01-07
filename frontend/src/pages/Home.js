import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 6,
          background: "linear-gradient(to right, #1976d2, #2196f3)",
          color: "white",
          borderRadius: "12px",
          mb: 4,
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to ChatifyPro!
        </Typography>
        <Typography variant="h5" gutterBottom>
          Your AI-powered chatbot solution for modern businesses.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/register"
            sx={{ mx: 2 }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            href="/learn-more"
            sx={{
              mx: 2,
              borderColor: "white",
              color: "white",
              "&:hover": { background: "white", color: "#1976d2" },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Typography variant="h4" align="center" gutterBottom>
        Why Choose ChatifyPro?
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: "center",
              p: 4,
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: 2,
              "&:hover": { boxShadow: 4 },
            }}
          >
            <Typography variant="h6" gutterBottom>
              Easy Integration
            </Typography>
            <Typography variant="body1">
              Seamlessly connect ChatifyPro with your business tools.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: "center",
              p: 4,
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: 2,
              "&:hover": { boxShadow: 4 },
            }}
          >
            <Typography variant="h6" gutterBottom>
              Customizable Chatbots
            </Typography>
            <Typography variant="body1">
              Tailor chatbots to meet your specific needs.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: "center",
              p: 4,
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: 2,
              "&:hover": { boxShadow: 4 },
            }}
          >
            <Typography variant="h6" gutterBottom>
              24/7 Availability
            </Typography>
            <Typography variant="body1">
              Provide round-the-clock support for your customers.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

