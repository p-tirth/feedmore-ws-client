import Navbar from "./components/navbar";
import Hero from "./components/hero"
import { useState } from "react";

export default function App() {
  const [socket,setSocket] = useState('');
  return (
    <>
    <Navbar onSocket={setSocket} />
    <Hero socket={socket} />
    </>
  )
}