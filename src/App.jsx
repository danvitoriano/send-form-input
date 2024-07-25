import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const emailRef = useRef(null)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Hook useRef</h1>
      <div className="card">
        <input type="email" placeholder="email" ref={emailRef} />
        <button onClick={() => console.log(emailRef.current.value)}>submit</button>
      </div>
    </>
  )
}

export default App
