import React from "react";
import { Grid, Card, CardContent, Typography, Button, CardActions, Container } from "@mui/material";

const Dashboard = () => {
  const bots = [
    { name: "Support Bot", description: "Handles customer support inquiries." },
    { name: "Sales Bot", description: "Assists with sales and product recommendations." },
    { name: "Feedback Bot", description: "Collects user feedback and reviews." },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Dashboard
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          display: "block",
          margin: "20px auto",
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
        Create Chatbot
      </Button>
      <Grid container spacing={4}>
        {bots.map((bot, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {bot.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {bot.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <Button size="small" color="secondary">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;

