import { useState } from 'react';
import './App.css';

function App() {
  const [nomer,setnomer] = useState(0)
    function randInt(){
        var nomer = Math.floor(Math.random() * 10000)
        return setnomer(nomer)
    }
  return (
      <div className='bg-[#93C6E7] h-full w-full min-h-screen min-w-screen '>
          <div className="grid grid-row-3 place-content-center m-0 h-screen">
            <h1 className='m-2 text-center font-bold text-white'>Number</h1>
            <h1 className='m-5 mb-8 text-8xl font-bold text-center text-white'>{nomer}</h1>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={randInt}>Pick a Number</button>
          </div>
      </div>
  )
}

export default App;
