import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core'
import { io } from "socket.io-client";
import { useContext, useEffect, useRef, useState } from "react";
import ChatOnline from './chatOnline/ChatOnline'


function App() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

 
  return (
   

 <ChatOnline/>
  
  );
}

export default App;
