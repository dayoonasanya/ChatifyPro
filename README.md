# ChatifyPro Backend

ChatifyPro is a platform offering custom chatbot solutions for small to medium businesses (SMBs). This backend provides the API and server logic for managing chatbots, user authentication, and interaction tracking.

## Project Description
ChatifyPro enables businesses to create and manage AI-powered chatbots to enhance customer support, automate processes, and provide personalized user experiences. This backend supports user authentication, chatbot CRUD operations, and analytics.

---

## Setup Instructions

### Prerequisites
- Node.js installed on your system
- MongoDB Atlas or local MongoDB instance
- OpenAI API Key

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/ChatifyPro.git
   cd ChatifyPro/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory with the following content:
   ```env
   MONGO_URI=<your_mongo_connection_string>
   JWT_SECRET=<your_jwt_secret_key>
   OPENAI_API_KEY=<your_openai_api_key>
   ```
4. Start the server:
   ```bash
   node server.js
   ```

### Test the Backend
- Use tools like **Postman** or **cURL** to test API endpoints.
- Server will run on `http://localhost:5000` by default.

---

## Features

### User Authentication
- User registration and login using JWT-based authentication.

### Chatbot Management
- **Create Chatbot**: Add new chatbot configurations.
- **Read Chatbots**: Fetch details of all or specific chatbots.
- **Update Chatbot**: Modify chatbot configurations.
- **Delete Chatbot**: Remove unwanted chatbots.

### Interaction API
- Dynamic interaction with AI-powered chatbots using OpenAI's GPT API.

### Analytics
- Track chatbot interactions and generate analytics.

---

## Usage Examples

### Authentication
#### Register
Endpoint: `POST /api/auth/register`
Body:
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

#### Login
Endpoint: `POST /api/auth/login`
Body:
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

### Chatbot CRUD
#### Create Chatbot
Endpoint: `POST /api/chatbots`
Body:
```json
{
  "name": "Support Bot",
  "description": "Handles customer support inquiries."
}
```

#### Get All Chatbots
Endpoint: `GET /api/chatbots`

#### Update Chatbot
Endpoint: `PUT /api/chatbots/:id`
Body:
```json
{
  "description": "Updated chatbot description."
}
```

#### Delete Chatbot
Endpoint: `DELETE /api/chatbots/:id`

---

## API Documentation
Refer to the [API.md](API.md) file for detailed endpoint descriptions and examples.


