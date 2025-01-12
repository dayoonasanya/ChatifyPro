import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import BuildIcon from "@mui/icons-material/Build";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, px: 2 }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 6,
          background: "linear-gradient(to right, #1976d2, #2196f3)",
          color: "white",
          borderRadius: "12px",
          mb: 6, // Margin bottom for spacing
          animation: "fadeIn 1.5s ease-in-out",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to ChatifyPro!
        </Typography>
        <Typography variant="h5" gutterBottom>
          Your AI-powered chatbot solution for modern businesses.
        </Typography>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/register"
            sx={{
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: "#d500f9",
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              },
            }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="/learn-more"
            sx={{
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "uppercase",
              borderColor: "white",
              color: "white",
              "&:hover": {
                backgroundColor: "white",
                color: "#1976d2",
                borderColor: "#1976d2",
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              },
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
              height: "100%",
            }}
          >
            <IntegrationInstructionsIcon
              sx={{ fontSize: "50px", color: "#1976d2", mb: 2 }}
            />
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
              height: "100%",
            }}
          >
            <BuildIcon sx={{ fontSize: "50px", color: "#1976d2", mb: 2 }} />
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
              height: "100%",
            }}
          >
            <AccessTimeIcon sx={{ fontSize: "50px", color: "#1976d2", mb: 2 }} />
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

