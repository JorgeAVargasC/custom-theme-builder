import { useState, useRef, useEffect} from 'react'

function App() {

  const [customTheme, setCustomTheme] = useState({
    primaryColor: '#5F369C',
    secondaryColor: '#1F1E3B',
    neutralColor1: '#FFFFFF',
    neutralColor2: '#A7A8B9',
    neutralColor3: '#6C6D86'
  })

  const { primaryColor, secondaryColor, neutralColor1, neutralColor2, neutralColor3 } = customTheme

  // Input Color Refs
  const primaryColorRef = useRef()
  const secondaryColorRef = useRef()
  const neutralColor1Ref = useRef()
  const neutralColor2Ref = useRef()
  const neutralColor3Ref = useRef()

  // Input Text Color Refs
  const primaryColorTextRef = useRef()
  const secondaryColorTextRef = useRef()
  const neutralColor1TextRef = useRef()
  const neutralColor2TextRef = useRef()
  const neutralColor3TextRef = useRef()

  // Input Color Change Handlers

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', primaryColor);
    document.documentElement.style.setProperty('--secondary', secondaryColor);
    document.documentElement.style.setProperty('--neutral-1', neutralColor1);
    document.documentElement.style.setProperty('--neutral-2', neutralColor2);
    document.documentElement.style.setProperty('--neutral-3', neutralColor3);
  }, [customTheme])

  const handleThemeChange = (e) => {
    const { name, value } = e.current

    setCustomTheme({
      ...customTheme,
      [name]: value,
    })
  }

  return (
    <div className="App bg-slate-900 min-h-screen text-slate-100 flex flex-col justify-center items-center">
      <h1 className='text-3xl my-4'>Custom Theme Builder</h1>
      <div className="w-11/12 flex flex-col md:flex-row">
        <div className='p-2 md:w-1/2'>
          <div className="py-4 w-full h-full flex flex-col items-center bg-slate-700 rounded-lg">
            <h2 className='text-2xl mb-4'>Custom your theme</h2>
            {/* Custom Color Section */}
            <div className='flex flex-col w-5/6'>
              {/* Primary Color */}
              <div className='flex flex-col mb-4'>
                <label className='mb-2'>Primary Color</label>
                <div className='flex flex-row'>
                  <input type="color" name='primaryColor' value={primaryColor} ref={primaryColorRef} onChange={() => handleThemeChange(primaryColorRef)} className='w-10 h-10 mr-2' />
                  <input type="text" maxLength={7} name='primaryColor' value={primaryColor} ref={primaryColorTextRef} onChange={() => handleThemeChange(primaryColorTextRef)} className='w-24 text-center text-slate-900 p-2 rounded outline-none' />
                </div>
              </div>
              {/* Secondary Color */}
              <div className='flex flex-col mb-4'>
                <label className='mb-2'>Secondary Color</label>
                <div className='flex flex-row'>
                  <input type="color" name='secondaryColor' value={secondaryColor} ref={secondaryColorRef} onChange={() => handleThemeChange(secondaryColorRef)} className='w-10 h-10 mr-2' />
                  <input type="text" maxLength={7} name='secondaryColor' value={secondaryColor} ref={secondaryColorTextRef} onChange={() => handleThemeChange(secondaryColorTextRef)} className='w-24 text-center text-slate-900 p-2 rounded outline-none' />
                </div>
              </div>
              {/* Neutral Color 1 */}
              <div className='flex flex-col mb-4'>
                <label className='mb-2'>Neutral Color 1</label>
                <div className='flex flex-row'>
                  <input type="color" name='neutralColor1' value={neutralColor1} ref={neutralColor1Ref} onChange={() => handleThemeChange(neutralColor1Ref)} className='w-10 h-10 mr-2' />
                  <input type="text" maxLength={7} name='neutralColor1' value={neutralColor1} ref={neutralColor1TextRef} onChange={() => handleThemeChange(neutralColor1TextRef)} className='w-24 text-center text-slate-900 p-2 rounded outline-none' />
                </div>
              </div>
              {/* Neutral Color 2 */}
              <div className='flex flex-col mb-4'>
                <label className='mb-2'>Neutral Color 2</label>
                <div className='flex flex-row'>
                  <input type="color" name='neutralColor2' value={neutralColor2} ref={neutralColor2Ref} onChange={() => handleThemeChange(neutralColor2Ref)} className='w-10 h-10 mr-2' />
                  <input type="text" maxLength={7} name='neutralColor2' value={neutralColor2} ref={neutralColor2TextRef} onChange={() => handleThemeChange(neutralColor2TextRef)} className='w-24 text-center text-slate-900 p-2 rounded outline-none' />
                </div>
              </div>
              {/* Neutral Color 3 */}
              <div className='flex flex-col mb-4'>
                <label className='mb-2'>Neutral Color 3</label>
                <div className='flex flex-row'>
                  <input type="color" name='neutralColor3' value={neutralColor3} ref={neutralColor3Ref} onChange={() => handleThemeChange(neutralColor3Ref)} className='w-10 h-10 mr-2' />
                  <input type="text" maxLength={7} name='neutralColor3' value={neutralColor3} ref={neutralColor3TextRef} onChange={() => handleThemeChange(neutralColor3TextRef)} className='w-24 text-center text-slate-900 p-2 rounded outline-none' />
                </div>
              </div>
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
                  <input className="bg-neutral-1 border border-neutral-2 rounded p-2 text-secondary outline-none focus:duration-200 duration-200 focus:outline-none focus:border-primary" placeholder='Placeholder' type="text" />
                  <small className='text-neutral-2 text-sm'>small message</small>
                </div>
                <div className='w-full flex flex-col mb-4'>
                  <label className='text-primary'>Label</label>
                  <input className="bg-neutral-2 border border-neutral-2 rounded p-2 text-neutral-3 focus:border-primary outline-none" disabled value='Disabled' type="text" />
                </div>
                <div className='w-full flex flex-col md:flex-row md:justify-start'>
                  <button className='bg-primary border border-primary text-neutral-1 rounded p-2 mb-2 md:mb-0 md:mr-2 hover:duration-200 duration-200 hover:bg-secondary hover:border-secondary'>Primary</button>
                  <button className='rounded border border-primary text-primary p-2 hover:text-neutral-1 hover:bg-primary hover:duration-200 duration-200'>Secondary</button>
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
