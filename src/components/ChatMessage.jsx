import dayjs from 'dayjs';
import robotProfileImage from '../assets/robot.png';
import userProfileImage from '../assets/user-1.png';
import './ChatMessage.css';

export function ChatMessage({message, sender, timestamp}){
  const time = timestamp
    ? dayjs(timestamp).format('h:mma')
    : dayjs().format('h:mma');
  return(
    <div className={
      sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-robot'
    }>
      {
        sender === 'robot' && (
          <img 
            src={robotProfileImage} 
            className="chat-message-profile"
          />
        )
      }
      <div className="chat-message-text">
        {message }
        <p className="time"> 
          {time}
        </p>
      </div>
      {
        sender === 'user' && (
          <img 
            src={userProfileImage} 
            className="chat-message-profile"
          />
        )
      }
    </div>
  );
}