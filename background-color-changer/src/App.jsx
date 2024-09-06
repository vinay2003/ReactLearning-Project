import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200 flex flex-col justify-center items-center" style={{backgroundColor: color}}>
      <h1 className="text-white text-2xl">Change Background Color</h1>
      <div className="mt-4 flex space-x-4 flex-wrap justify-center">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600" 
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600" 
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600" 
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button 
          className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600" 
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button 
          className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600" 
          onClick={() => setColor("purple")}
        >
          Purple
        </button>
        <button 
          className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600" 
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button 
          className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600" 
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button 
          className="px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600" 
          onClick={() => setColor("teal")}
        >
          Teal
        </button>
      </div>
    </div>
  )
}

export default App;
