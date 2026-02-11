import { useState } from 'react'

import hero from '../../assets/hero.png'

const PASSWORD = 'scarf'

function LandingPage({ onUnlock }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.toLowerCase().trim() === PASSWORD) {
      onUnlock()
    } else {
      setError(true)
      setTimeout(() => setError(false), 1500)
    }
  }

  return (
    <div className="landing-page">
      <img className="hero-image" src={hero} alt="Valentine's collage" />

      <h1 className="landing-title">Happy Valentines, Kuru</h1>

      <form className="password-container" onSubmit={handleSubmit}>
        <input
          className="password-input"
          type="text"
          placeholder="enter the password..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
        <p className="password-hint">
          hint : what very sentimental thing of mine have you lost ?
        </p>
        {error && <p className="password-error">try again bossa</p>}
      </form>
    </div>
  )
}

export default LandingPage
