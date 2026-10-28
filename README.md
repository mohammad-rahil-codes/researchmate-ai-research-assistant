# ResearchMate — AI Research Assistant

**ResearchMate** is a full-stack AI-powered web application that helps users understand research content by generating concise summaries and suggesting related topics using Google's Gemini API.

## 🌐 Live Demo

- **Frontend:** https://researchmate-ai-research-assistant.vercel.app
- **Backend:** https://researchmate-backend-zw17.onrender.com

Try the live application to summarize research content and explore related ideas. The backend runs on Render's free plan, so the first request after inactivity may take longer.

## ✨ Features

- **AI Summarization:** Convert research content into concise, understandable summaries.
- **Idea Suggestions:** Discover related topics and further reading ideas.
- **Interactive Interface:** Use a responsive React-based web interface.
- **Input Validation:** Handle empty or invalid input.
- **Error Handling:** Display helpful messages when requests fail.
- **Secure API Configuration:** Read the Gemini API key from an environment variable.

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS

**Backend**
- Java 17
- Spring Boot
- Maven
- REST API
- Bean Validation

**AI Integration**
- Google Gemini API

**Deployment and Tools**
- Git and GitHub
- Docker
- Render
- Vercel
- IntelliJ IDEA

## 📁 Project Structure

```text
research-assistant/
├── frontend/
│   ├── src/
│   ├── package.json
│   └── README.md
├── src/
│   └── main/
│       ├── java/
│       └── resources/
│           └── application.properties
├── pom.xml
├── Dockerfile
├── mvnw
├── mvnw.cmd
└── README.md
```

## 🚀 Run Locally

### Prerequisites

- Java JDK 17
- Node.js and npm
- Git
- A Google Gemini API key

### 1. Clone the repository

```bash
git clone https://github.com/mohammad-rahil-codes/researchmate-ai-research-assistant.git
cd researchmate-ai-research-assistant
```

### 2. Configure the Gemini API key

Set an environment variable named `GEMINI_API_KEY` with your own API key.

The backend reads the key through `application.properties`:

```properties
gemini.api.key=${GEMINI_API_KEY}
```

Never commit your actual API key to GitHub.

### 3. Start the backend

On Windows, from the project root, run:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend normally starts at:

`http://localhost:8080`

Make sure `GEMINI_API_KEY` is available to the process running Spring Boot.

### 4. Start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

`http://localhost:5173`

Keep both the frontend and backend running while using the application.

## 🔌 API Reference

**Endpoint:** `POST /api/research/process`

Local URL:

`http://localhost:8080/api/research/process`

Example request:

```json
{
  "content": "Explain the fundamentals of deep learning.",
  "operation": "summarize"
}
```

Supported operations:

- `summarize` — summarizes submitted research content.
- `suggest` — suggests related topics and ideas.

The API validates incoming requests and returns responses from the backend.

## 🔐 Security

- Keep API keys in environment variables.
- Never commit secrets or credentials to version control.
- Keep the Gemini API key on the backend; do not expose it in frontend code.
- Use appropriate CORS restrictions for production.

## 🎯 Project Goal

ResearchMate aims to make research and learning easier by turning submitted content into understandable summaries and useful follow-up ideas.

## 👨‍💻 Author

Developed as a full-stack AI project using React, Java, Spring Boot, and the Gemini API.

**GitHub:** [mohammad-rahil-codes](https://github.com/mohammad-rahil-codes)
