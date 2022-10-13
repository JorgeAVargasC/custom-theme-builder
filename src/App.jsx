import { useState, useRef } from 'react'

function App() {

  const [primaryColor, setPrimaryColor] = useState('#5F369C')
  const [secondaryColor, setSecondaryColor] = useState('#1F1E3B')

  const [tailwindColors, setTailwindColors] = useState({})

  const primaryColorRef = useRef()
  const secondaryColorRef = useRef()

  const handlePrimaryColorChange = () => {
    setPrimaryColor(primaryColorRef.current.value)
  }

  const handleSecondaryColorChange = () => {
    setSecondaryColor(secondaryColorRef.current.value)
  }

  const handleTailwindColors = () => {
    setTailwindColors({
      primary: primaryColor,
      secondary: secondaryColor
    })
  }

  return (
    <div className="App bg-white min-h-screen text-slate-800 flex flex-col justify-center items-center">

      <h1 className='text-3xl my-4'>Custom Theme Builder</h1>

      <div className="w-11/12 flex flex-col md:flex-row">

        <div className='p-2 md:w-1/2'>
          <div className="py-4 w-full h-full flex flex-col items-center bg-gray-200 rounded-lg">

            <h2 className='text-2xl mb-4'>Custom your theme</h2>

            <div className='flex flex-col mb-4 w-2/3 md:w-1/3'>
              <label>Primary Color</label>
              <input value={primaryColor} onChange={() => handlePrimaryColorChange()} ref={primaryColorRef} className="" type="color" />
              <p className='text-primary'>{primaryColor}</p>
            </div>

            <div className='flex flex-col w-2/3 md:w-1/3'>
              <label>Secondary Color</label>
              <input value={secondaryColor} onChange={() => handleSecondaryColorChange()} ref={secondaryColorRef} className="" type="color" />
              <p className='text-secondary'>{secondaryColor}</p>
            </div>

          </div>
        </div>

        <div className='p-2 md:w-1/2'>
          <div className="py-4 w-full h-full flex flex-col items-center bg-gray-200 rounded-lg">

            <h2 className='text-2xl mb-4'>Page Preview</h2>

            <div className='w-2/3 h-60 flex flex-col justify-between rounded bg-gray-50'>

              <div className='h-9 flex justify-center items-center rounded-t bg-secondary'>
                <p>Header</p>
              </div>

              <div className='flex justify-center items-center'>
                <div className='flex flex-col mb-4 text-slate-800 w-11/12'>
                  <label className='text-primary'>Label</label>
                  <input className="bg-slate-300" type="text" />
                </div>
              </div>

              <div className='h-16 flex justify-center items-center rounded-b bg-secondary'>
                <p>Footer</p>
              </div>

            </div>
          </div>
        </div>
        
        

        
      </div>
    </div>
  )
}

export default App
