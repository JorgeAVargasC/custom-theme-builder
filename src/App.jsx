import { useState, useRef, useEffect} from 'react'

function App() {

  const [primaryColor, setPrimaryColor] = useState('#5F369C')
  const [secondaryColor, setSecondaryColor] = useState('#1F1E3B')
  const [neutralColor1, setNeutralColor1] = useState('#FFFFFF')
  const [neutralColor2, setNeutralColor2] = useState('#A7A8B9')
  const [neutralColor3, setNeutralColor3] = useState('#6C6D86')


  const primaryColorRef = useRef()
  const secondaryColorRef = useRef()
  const neutralColor1Ref = useRef()
  const neutralColor2Ref = useRef()
  const neutralColor3Ref = useRef()

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', primaryColor);
    document.documentElement.style.setProperty('--secondary', secondaryColor);
    document.documentElement.style.setProperty('--neutral-1', neutralColor1);
    document.documentElement.style.setProperty('--neutral-2', neutralColor2);
    document.documentElement.style.setProperty('--neutral-3', neutralColor3);
  }, [primaryColor, secondaryColor, neutralColor1, neutralColor2, neutralColor3])
  
  const handlePrimaryColorChange = () => {
    setPrimaryColor(primaryColorRef.current.value)
    document.documentElement.style.setProperty('--primary',primaryColor);
  }

  const handleSecondaryColorChange = () => {
    setSecondaryColor(secondaryColorRef.current.value)
    document.documentElement.style.setProperty('--secondary',secondaryColor);
  }

  const handleNeutralColor1Change = () => {
    setNeutralColor1(neutralColor1Ref.current.value)
    document.documentElement.style.setProperty('--neutral-1',neutralColor1);
  }

  const handleNeutralColor2Change = () => {
    setNeutralColor2(neutralColor2Ref.current.value)
    document.documentElement.style.setProperty('--neutral-2',neutralColor2);
  }

  const handleNeutralColor3Change = () => {
    setNeutralColor3(neutralColor3Ref.current.value)
    document.documentElement.style.setProperty('--neutral-3',neutralColor3);
  }

  return (
    <div className="App bg-slate-900 min-h-screen text-slate-100 flex flex-col justify-center items-center">
      <h1 className='text-3xl my-4'>Custom Theme Builder</h1>
      <div className="w-11/12 flex flex-col md:flex-row">
        <div className='p-2 md:w-1/2'>
          <div className="py-4 w-full h-full flex flex-col items-center bg-slate-700 rounded-lg">
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
            <div className='flex flex-col w-2/3 md:w-1/3'>
              <label>Neutral Color 1</label>
              <input value={neutralColor1} onChange={() => handleNeutralColor1Change()} ref={neutralColor1Ref} className="" type="color" />
              <p className='text-neutral-1'>{neutralColor1}</p>
            </div>
            <div className='flex flex-col w-2/3 md:w-1/3'>
              <label>Neutral Color 2</label>
              <input value={neutralColor2} onChange={() => handleNeutralColor2Change()} ref={neutralColor2Ref} className="" type="color" />
              <p className='text-neutral-2'>{neutralColor2}</p>
            </div>
            <div className='flex flex-col w-2/3 md:w-1/3'>
              <label>Neutral Color 3</label>
              <input value={neutralColor3} onChange={() => handleNeutralColor3Change()} ref={neutralColor3Ref} className="" type="color" />
              <p className='text-neutral-3'>{neutralColor3}</p>
            </div>
          </div>
        </div>

        <div className='p-2 md:w-1/2'>
          <div className="py-4 w-full h-full flex flex-col items-center bg-slate-700 rounded-lg">
            <h2 className='text-2xl mb-4'>Page Preview</h2>
            {/* Page Preview */}
            <div className='w-5/6 flex flex-col items-center justify-between rounded-lg bg-neutral-1 text-secondary'>
              {/* Header */}
              <div className='w-full h-9 flex justify-center items-center rounded-t bg-secondary text-neutral-1'>
                <p>Header</p>
              </div>

              {/* Body */}
              <div className='flex flex-col justify-center items-center w-11/12 py-4'>
                <h2 className='font-bold text-primary text-xl'>Some Title</h2>
                <div className='w-full flex flex-col mb-2'>
                  <label className='text-primary'>Label</label>
                  <input className="bg-neutral-1 border border-neutral-2 rounded p-2 text-secondary outline-none focus:duration-300 duration-300 focus:outline-none focus:border-primary" placeholder='Placeholder' type="text" />
                  <small className='text-neutral-2 text-sm'>small message</small>
                </div>
                <div className='w-full flex flex-col mb-4'>
                  <label className='text-primary'>Label</label>
                  <input className="bg-neutral-2 border border-neutral-2 rounded p-2 text-neutral-3 focus:border-primary outline-none" disabled value='Disabled' type="text" />
                </div>
                <div className='w-full flex flex-col md:flex-row md:justify-start'>
                  <button className='bg-primary border border-primary text-neutral-1 rounded p-2 mb-2 md:mb-0 md:mr-2 hover:duration-300 duration-300 hover:bg-secondary hover:border-secondary'>Primary</button>
                  <button className='rounded border border-primary text-primary p-2 hover:text-neutral-1 hover:bg-primary hover:duration-300 duration-300'>Secondary</button>
                </div>
              </div>

              {/* Footer */}
              <div className='w-full h-16 flex justify-center items-center rounded-b bg-secondary text-neutral-1'>
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
