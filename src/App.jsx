import { useState, useEffect } from 'react';
import {Chatbot} from 'supersimpledev';
import {ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css';

function App(){
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

  useEffect(() => {    
    Chatbot.addResponses({
      
      // React fundamentals
      'what is react': 'React is a JavaScript library used to build interactive user interfaces.',

      'what is a component': 'A React component is a reusable piece of UI that can contain its own logic and structure.',

      'what are props': 'Props are used to pass data from one React component to another, usually from parent to child.',

      'what is state': 'State is data managed within a React component that can change over time and trigger re-renders.',

      'what is jsx': 'JSX is a syntax extension for JavaScript that allows you to write HTML-like markup inside React.',

      'what is useState': 'useState is a React Hook that lets functional components manage state.',

      'what is useEffect': 'useEffect is a React Hook used to synchronize components with external systems and handle side effects.',

      'what are react hooks': 'React Hooks are functions that let you use state and other React features in functional components.',

      'why use react': 'React makes UI development easier through reusable components, declarative rendering, and efficient updates.',

      // Closing
      'goodbye': 'Goodbye! Keep learning and building amazing things!'
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return(
    <div className="app-container"> 
      <p>
        {
          chatMessages.length === 0
            ? 'Welcome to the chatbot project! Send a message using the textbox below.'
            : ''
        }  
      </p>
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
