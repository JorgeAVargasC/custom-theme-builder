import { useState, useRef } from 'react'

function App() {
  const [primaryColor, setPrimaryColor] = useState('')
  const [secondaryColor, setSecondaryColor] = useState('')

  return (
    <div className="App bg-slate-900 min-h-screen text-white flex justify-center items-center">
      <div className=" w-11/12 flex flex-row  bg-slate-800">
        <div className="w-1/2 flex flex-col justify-center items-center bg-slate-700">

          <div className='flex flex-col mb-4 bg-slate-400 w-1/3'>
            <label>Primary Color</label>
            <input className="" type="color" />
          </div>

          <div className='flex flex-col w-1/3'>
            <label>Secondary</label>
            <input className="" type="color" />
          </div>

        </div>
        <div className="w-1/2 flex justify-center items-center bg-slate-600">2</div>
      </div>
    </div>
  )
}

export default App
