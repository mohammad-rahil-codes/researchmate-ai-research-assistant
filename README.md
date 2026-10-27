# ResearchMate — AI Research Assistant

ResearchMate is a full-stack AI-powered web application that helps users understand research content, generate concise summaries, and discover related ideas using Google's Gemini API.

## ✨ Features

- **AI Summarization:** Generate summaries of research content.
- **Idea Suggestions:** Discover related topics and further reading ideas.
- **Interactive Web Interface:** A responsive React-based user interface.
- **Input Validation:** Validates requests and handles invalid input.
- **Error Handling:** Displays helpful error messages when requests fail.
- **Secure API Configuration:** Loads the Gemini API key from an environment variable.

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS

**Backend**
- Java
- Spring Boot
- Maven
- REST API
- Bean Validation

**AI Integration**
- Google Gemini API

## 📁 Project Structure

```text
research-assistant/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   ├── package.json
│   └── README.md
├── src/
│   └── main/
│       ├── java/             # Spring Boot source code
│       └── resources/
│           └── application.properties
├── pom.xml                   # Maven dependencies
├── mvnw
├── mvnw.cmd
└── README.md
```

## ⚙️ Prerequisites

Install the following before running the application:

- Java JDK
- Node.js and npm
- Git
- A Google Gemini API key

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mohammad-rahil-codes/researchmate-ai-research-assistant.git
cd researchmate-ai-research-assistant
```

### 2. Configure the Gemini API key

Set an environment variable named `GEMINI_API_KEY` containing your own Gemini API key.

The backend reads it from `src/main/resources/application.properties`:

```properties
gemini.api.key=${GEMINI_API_KEY}
```

**Security:** Never commit your actual API key to GitHub.

### 3. Run the Spring Boot backend

On Windows, from the project root, run:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend should start at:

`http://localhost:8080`

Ensure `GEMINI_API_KEY` is available to the process running Spring Boot.

### 4. Run the React frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal, usually:

`http://localhost:5173`

Keep both the frontend and backend running while using the application.

## 🔌 API Endpoint

**Process research content**

`POST http://localhost:8080/api/research/process`

Example request:

```json
{
  "content": "Explain the fundamentals of deep learning.",
  "operation": "summarize"
}
```

Supported operations:

- `summarize` — summarizes the submitted content.
- `suggest` — suggests related topics and ideas.

The backend validates requests and returns appropriate error responses for invalid input.

## 🔐 Security Notes

- Keep API keys out of source code and version control.
- Configure secrets through environment variables.
- Do not share API keys in screenshots, commits, or public files.

## 🎯 Project Goal

The goal of ResearchMate is to make research and learning easier by turning submitted content into understandable summaries and useful ideas.

## 👨‍💻 Author

Developed as a full-stack AI project using React, Java, Spring Boot, and the Gemini API.
