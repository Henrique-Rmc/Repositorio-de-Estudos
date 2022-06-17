import React from 'react'
import "./Game.css"


const game = ({verifyLetter}) => {
  return (
    <div>
        <h1>Game</h1>
        <p>
        <button onClick={verifyLetter}>Clique para mudar o estado</button>
        </p>
    </div>
  )
}

export default game