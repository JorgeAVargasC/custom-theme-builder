import { useState, useRef } from 'react'

function App() {

  const primaryColorRef = useRef()
  const secondaryColorRef = useRef()

  const [primaryColor, setPrimaryColor] = useState('')
  const [secondaryColor, setSecondaryColor] = useState('')

  const handlePrimaryColorChange = () => {
    setPrimaryColor(primaryColorRef.current.value)
  }

  const handleSecondaryColorChange = () => {
    setSecondaryColor(secondaryColorRef.current.value)
  }

  return (
    <div className="App bg-slate-900 min-h-screen text-white flex justify-center items-center">
      <div className=" w-11/12 flex flex-row  bg-slate-800">
        <div className="w-1/2 flex flex-col justify-center items-center bg-slate-700">

          <div className='flex flex-col mb-4 bg-slate-400 w-1/3'>
            <label>Primary Color</label>
            <input onChange={() => handlePrimaryColorChange()} ref={primaryColorRef} className="" type="color" />
          </div>

          <div className='flex flex-col w-1/3'>
            <label>Secondary</label>
            <input onChange={() => handleSecondaryColorChange()} ref={secondaryColorRef} className="" type="color" />
          </div>

        </div>
        <div className="w-1/2 flex flex-col justify-center items-center bg-slate-600">
          <div className='w-48 h-60 flex flex-col justify-between rounded bg-gray-50'>

            <div className='h-9 flex justify-center items-center rounded-t bg-gray-800'>
              <p>Header</p>
            </div>

            <div className='flex justify-center items-center'>
              <div className='flex flex-col mb-4 text-slate-800 w-11/12'>
                <label>Label</label>
                <input className="bg-slate-300" type="text" />
              </div>
            </div>

            <div className='h-16 flex justify-center items-center rounded-b bg-gray-800'>
              <p>Footer</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
