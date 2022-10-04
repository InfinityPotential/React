import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import Lobby from './components/Lobby';
import Chat from './components/Chat';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

const App = () => {
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const joinRoom = async (user, room) => {
    try {
      const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:44328/chat")
      .configureLogging(LogLevel.Information)
      .build();
      
      connection.on("UsersInRoom", (users) => {
        setUsers(users);
      })
      
      connection.on("ReceiveMessage", (user, message) => {
        setMessages(messages => [...messages, {user, message}]);
      });
      
      connection.onclose(e=>{
        setConnection();
        setMessages([]);
        setUsers([]);
      });
      
      await connection.start();
      await connection.invoke("JoinRoom", {user, room});
      setConnection(connection);
    }catch (e) {
      console.log(e);
    }
  }
  const closeConnection = async () => {
    try{
      await connection.stop();
    }catch(e){
      console.log(e);
    }
  }
  const sendMessage = async (message) => {
    try{
      await connection.invoke("SendMessage", message);
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div className='app'>
      <h2>My Chat</h2>
      {!connection
      ? <Lobby joinRoom={joinRoom}/>
      : <Chat messages={messages} sendMessage={sendMessage} closeConnection={closeConnection} users={users}/>}
    </div>
  )
}

export default App