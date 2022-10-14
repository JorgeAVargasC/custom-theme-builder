import { useState, useRef, useEffect} from 'react'

function App() {

  const [primaryColor, setPrimaryColor] = useState('#5F369C')
  const [secondaryColor, setSecondaryColor] = useState('#1F1E3B')

  const primaryColorRef = useRef()
  const secondaryColorRef = useRef()

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', primaryColor);
    document.documentElement.style.setProperty('--secondary', secondaryColor);
  }, [primaryColor, secondaryColor])
  
  const handlePrimaryColorChange = () => {
    setPrimaryColor(primaryColorRef.current.value)
    document.documentElement.style.setProperty('--primary',primaryColor);
  }

  const handleSecondaryColorChange = () => {
    setSecondaryColor(secondaryColorRef.current.value)
    document.documentElement.style.setProperty('--secondary',secondaryColor);
  }

  return (
    <div className="App bg-white min-h-screen text-slate-800 flex flex-col justify-center items-center">
      <h1 className='text-3xl my-4'>Custom Theme Builder</h1>
      <div className="w-11/12 flex flex-col md:flex-row">
        <div className='p-2 md:w-1/2'>
          <div className="py-4 w-full h-full flex flex-col items-center bg-gray-200 rounded-lg">
            <h2 className='text-2xl mb-4'>Custom your theme</h2>
            {/* Custom Color Section */}
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
            {/* Page Preview */}
            <div className='w-2/3 flex flex-col items-center justify-between rounded bg-gray-50'>
              {/* Header */}
              <div className='w-full h-9 flex justify-center items-center rounded-t bg-secondary'>
                <p>Header</p>
              </div>

              {/* Body */}
              <div className='flex flex-col justify-center items-center w-11/12 py-4'>
                <div className='w-full flex flex-col mb-4 text-slate-800'>
                  <label className='text-primary'>Label</label>
                  <input className="bg-slate-300 rounded p-2" placeholder='Some text' type="text" />
                </div>
                <div className='w-full flex flex-col md:flex-row justify-between'>
                  <button className='bg-primary text-white rounded p-2 mb-2 md:mb-0'>Primary Button</button>
                  <button className='rounded border border-primary text-primary p-2'>Secondary Button</button>
                </div>
              </div>

              {/* Footer */}
              <div className='w-full h-16 flex justify-center items-center rounded-b bg-secondary'>
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
