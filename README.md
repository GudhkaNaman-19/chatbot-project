# Chatbot Project

A simple and interactive **chatbot application** built using **React 19, JavaScript, and Vite**.

The project provides a conversational interface with user and chatbot messages, predefined React-related responses, asynchronous response handling, chat history persistence, and interactive keyboard controls.

## Preview

### Chatbot Home Screen

![Chatbot Home Screen](screenshots/chatbot-home.png)

### Chatbot Conversation

![Chatbot Conversation](screenshots/chatbot-conversation.png)

### Live Demo

[Chatbot Project Live Demo](https://gudhkanaman-19.github.io/chatbot-project/)

### GitHub Repository

[Chatbot Project Repository](https://github.com/GudhkaNaman-19/chatbot-project)

## Features

- Interactive chatbot interface
- User and chatbot message display
- Predefined responses to React-related questions
- Asynchronous chatbot responses using SuperSimpleDev
- Loading spinner while waiting for responses
- Chat history saved using browser Local Storage
- Clear chat functionality
- Send messages using the Enter key
- Clear the input using the Escape key
- Reusable React components
- Responsive user interface

## Technologies Used

- React 19
- JavaScript
- Vite
- CSS3
- Day.js
- Browser Local Storage
- Git & GitHub

## Application Flow

The application uses reusable React components and state management to handle user interactions and chatbot responses.

```text
             User Input
                 |
                 v
          +--------------+
          |  ChatInput   |
          +------+-------+
                 |
                 v
          Send User Message
                 |
                 v
          +--------------+
          |  App.jsx     |
          | State Update |
          +------+-------+
                 |
                 v
          Chatbot Response
                 |
                 v
          Asynchronous Processing
                 |
                 v
          Loading Spinner
                 |
                 v
          +--------------+
          | ChatMessage  |
          +------+-------+
                 |
                 v
          Display Response
                 |
                 v
          Save Chat History
             LocalStorage
```

### Why React Components?

The application is divided into reusable components to keep the code organized and maintainable.

- **ChatInput:** Handles user input and message submission.
- **ChatMessages:** Displays the conversation between the user and chatbot.
- **ChatMessage:** Renders individual user and chatbot messages.
- **App:** Manages application state and coordinates chatbot interactions.

## Project Structure

```text
chatbot-project/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ChatInput.jsx
│   │   ├── ChatInput.css
│   │   ├── ChatMessage.jsx
│   │   ├── ChatMessage.css
│   │   ├── ChatMessages.jsx
│   │   └── ChatMessages.css
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js and npm
- Git
- A modern web browser
- A code editor (VS Code recommended)

### Installation

1. Clone the repository.

```bash
git clone https://github.com/GudhkaNaman-19/chatbot-project.git
```

2. Navigate to the project directory.

```bash
cd chatbot-project
```

3. Install the dependencies.

```bash
npm install
```

4. Start the development server.

```bash
npm run dev
```

5. Open the local URL displayed in your terminal to use the chatbot.

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run lint` | Run ESLint checks |
| `npm run preview` | Preview production build |

## Usage

Open the application in your browser to start interacting with the chatbot.

Enter a message in the input field and press Enter or use the send button to submit it. The chatbot processes the message and displays an appropriate response.

Chat history is saved in browser Local Storage, allowing conversations to persist across page reloads.

You can also clear the conversation using the clear chat functionality. Press Escape to clear the current input field.

## Learning Outcomes

Through this project, I practised:

- Understanding React fundamentals
- Building reusable React components
- Managing application state using `useState`
- Handling side effects using `useEffect`
- Passing data between components through props
- Handling user input and events
- Working with asynchronous JavaScript
- Handling promises and chatbot responses
- Saving and retrieving data using Local Storage
- Implementing keyboard event handling
- Displaying conditional UI elements
- Managing loading states
- Organizing React applications into reusable components
- Using Vite for frontend development
- Using Git and GitHub for version control and deployment

## Acknowledgements

Special thanks to **SuperSimpleDev** for providing the chatbot-related learning resources and response functionality used in this project.

## Disclaimer

This project was developed as a learning exercise to practise React development and understand the fundamentals of building interactive chatbot applications.
