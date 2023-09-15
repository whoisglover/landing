import React, { useState, useEffect } from 'react'
import { colors, colorCombos, ColorCombination } from './modules/colors'
import './App.css'

function App() {
  const [selectedColorCombo, setSelectedColorCombo] =
    useState<ColorCombination | null>(null)
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colorCombos.length)
    setSelectedColorCombo(colorCombos[randomIndex])
  }, [])

  if (!selectedColorCombo) return null

  return (
    <div
      className='container'
      style={{ backgroundColor: selectedColorCombo.primary }}
    >
      <div className='logo' style={{ color: selectedColorCombo.secondary }}>
        mllw
      </div>
      <div className='text' style={{ color: selectedColorCombo.secondary }}>
        Coming Soon...
      </div>
      <div></div>
    </div>
  )
}

export default App
