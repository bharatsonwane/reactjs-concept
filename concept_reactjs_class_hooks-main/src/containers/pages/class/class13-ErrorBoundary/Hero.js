import React from 'react'

function Hero ({ heroName }) {
  if (heroName === 'Joker') {
    throw new Error(' Not a hero!')
  }
  return <h2>{heroName}</h2>
}

export default Hero
