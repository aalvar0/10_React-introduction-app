import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  const name = "Alvaro";
  return (
    <>
     <h1>Hello {`${name}`}</h1>
    </>
  )
}

export default App
