import React from 'react';
import {io} from 'socket.io-client'

function Navbar({onSocket}) {
  var socket
  const handleReconnect = () =>{
    socket = io('wss://donation-4tlz.onrender.com/')
    socket.on("connect",()=>{
      console.log(`You connected with id:${socket.id}`)
      socket.emit("clientConnection","hello")
      console.log(socket)
      onSocket(socket)
    })
  }
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white dark:bg-gray-900">
      <div className="flex items-center">
        <span className="text-lg font-bold">feedmore Client</span>
      </div>
      <div className="flex items-center">
        <button onClick={handleReconnect}className="px-4 py-2 rounded bg-blue-500 text-white font-medium">
          Reconnect
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
