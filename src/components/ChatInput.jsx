import { useState } from "react";
import { Chatbot } from 'supersimpledev';
import loadingSpinner from '../assets/loading-spinner.gif';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }


  async function sendMessage() {
    if (isLoading || inputText.trim() === '') {
      return;
    }

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        timestamp: Date.now()
      }
    ];

    setChatMessages(newChatMessages);
    setInputText('');
    setIsLoading(true);

    setChatMessages([
      ...newChatMessages,
      {
        message: (
          <img
            src={loadingSpinner}
            className="loading-spinner"
            alt="Loading..."
          />
        ),
        sender: 'robot',
        id: crypto.randomUUID(),
        timestamp: Date.now()
      }
    ]);

    try {
      const response = await Chatbot.getResponseAsync(inputText);

      setChatMessages([
        ...newChatMessages,
        {
          message: response,
          sender: 'robot',
          id: crypto.randomUUID(),
          timestamp: Date.now()
        }
      ]);
    } catch (error) {
      console.error('Chatbot error:', error);

      setChatMessages([
        ...newChatMessages,
        {
          message: 'Sorry, something went wrong. Please try again.',
          sender: 'robot',
          id: crypto.randomUUID(),
          timestamp: Date.now()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  }


  function clearMessage() {
    if (isLoading) {
      return;
    }

    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={(event) => {
          if (!isLoading) {
            if (event.key === 'Enter') {
              sendMessage();
            } else if (event.key === 'Escape') {
              setInputText('')
            }
          }
        }}
        className="chat-input"
      />
      <button
        onClick={() => {
          if (!isLoading) {
            sendMessage();
          }
        }}
        className="send-button"
      >
        Send
      </button>
      <button
        onClick={clearMessage}
        className="clear-button"
        disabled={isLoading}
      >
        Clear
      </button>
    </div>
  );
}