import './GameOver.css'

const GameOver = ({reTry}) => {
  return (
    <div>
        <h1>Game Over</h1>
        <button onClick={reTry}>Clique reiniciar</button>
    </div>
  )
}

export default GameOver