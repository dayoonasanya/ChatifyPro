import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions } from '@mui/material';

const mockChatbots = [
  { id: 1, name: 'Support Bot', description: 'Handles customer support inquiries.' },
  { id: 2, name: 'Sales Bot', description: 'Assists with sales and product recommendations.' },
  { id: 3, name: 'Feedback Bot', description: 'Collects user feedback and reviews.' },
];

function Dashboard() {
  const handleCreateChatbot = () => {
    console.log('Create Chatbot clicked');
  };

  const handleEdit = (id) => {
    console.log(`Edit Chatbot with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete Chatbot with ID: ${id}`);
  };

  return (
    <Container sx={{ mt: 4 }}>
      {/* Header Section */}
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 4 }}
        onClick={handleCreateChatbot}
      >
        Create Chatbot
      </Button>

      {/* Chatbot List */}
      <Grid container spacing={3}>
        {mockChatbots.map((chatbot) => (
          <Grid item xs={12} sm={6} md={4} key={chatbot.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{chatbot.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {chatbot.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handleEdit(chatbot.id)}>
                  Edit
                </Button>
                <Button size="small" color="secondary" onClick={() => handleDelete(chatbot.id)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Dashboard;

