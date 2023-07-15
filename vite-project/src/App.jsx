import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ComplexButton, {MyButton, Lines, ProfileCard, ConditionalButton} from './BasicsComponents'
import {ListStrings} from './BasicsComponents'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileCard />
      <Lines />
      <ComplexButton />
      <Lines />
      <ConditionalButton />
      <Lines />
      <ListStrings />
    </>
  )
}

export default App
