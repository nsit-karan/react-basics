import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ComplexButton, {MyButton, Lines} from './BasicsComponents'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyButton />
      <Lines />
      <ComplexButton />
    </>
  )
}

export default App
