import Navbar from "./components/navbar";
import Hero from "./components/hero"
import { useState } from "react";

export default function App() {
  const [socket,setSocket] = useState('');
  return (
    <>
    <div className="bg-slate-300">
    <Navbar onSocket={setSocket} />
    <Hero socket={socket} />
    </div>
    </>
  )
}