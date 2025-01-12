import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Container,
  Modal,
  Box,
  TextField,
} from "@mui/material";
import axios from "axios";

const Dashboard = () => {
  const [chatbots, setChatbots] = useState([]); // Store chatbot data
  const [error, setError] = useState(""); // Handle errors
  const [open, setOpen] = useState(false); // Modal state
  const [newChatbot, setNewChatbot] = useState({ name: "", description: "" }); // New chatbot data

  // Fetch chatbots from the backend
  useEffect(() => {
    const fetchChatbots = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/chatbots", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setChatbots(response.data);
      } catch (err) {
        setError("Failed to fetch chatbots. Please check your backend connection.");
      }
    };

    fetchChatbots();
  }, []);

  // Handle chatbot creation
  const handleCreateChatbot = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/chatbots",
        newChatbot,
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setChatbots([...chatbots, response.data]); // Update the list
      setNewChatbot({ name: "", description: "" }); // Reset form
      setOpen(false); // Close modal
    } catch (err) {
      setError("Failed to create chatbot. Please try again.");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Header */}
      <Typography variant="h4" align="center" gutterBottom>
        Dashboard
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Button
        variant="contained"
        color="primary"
        sx={{ display: "block", margin: "20px auto", padding: "10px 20px", fontSize: "16px" }}
        onClick={() => setOpen(true)}
      >
        Create Chatbot
      </Button>

      {/* Modal for Creating Chatbot */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ p: 4, backgroundColor: "white", mx: "auto", my: "20%", width: 400 }}>
          <Typography variant="h6" gutterBottom>
            Create Chatbot
          </Typography>
          <TextField
            fullWidth
            label="Name"
            value={newChatbot.name}
            onChange={(e) => setNewChatbot({ ...newChatbot, name: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Description"
            value={newChatbot.description}
            onChange={(e) => setNewChatbot({ ...newChatbot, description: e.target.value })}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleCreateChatbot}>
            Save
          </Button>
        </Box>
      </Modal>

      {/* Chatbot List */}
      <Grid container spacing={4}>
        {chatbots.map((bot, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
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

