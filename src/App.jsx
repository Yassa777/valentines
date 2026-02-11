import { useState } from 'react'
import LandingPage from './components/LandingPage'
import PoemPage from './components/PoemPage'
import './App.css'

function App() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <>
      {!unlocked ? (
        <LandingPage onUnlock={() => setUnlocked(true)} />
      ) : (
        <PoemPage />
      )}
    </>
  )
}

export default App
