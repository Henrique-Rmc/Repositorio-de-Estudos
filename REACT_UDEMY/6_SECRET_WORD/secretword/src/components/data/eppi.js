
//CSS
import './App.css';

//COMPONENTS
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';

//DATA
import { wordsList } from "./components/data/words"

//REACT
import {useCallback, useEffect, useState} from "react"


const stages = [
  {id: 1, name : "start"},
  {id: 2, name : "game"},
  {id: 3, name: "end"}

]

function App() {


  //permite realizar alterações do gameStage através do setGameStage
  const[gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] =useState('')
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState (3)
  const [score, setScore] = useState(0) 


  //Object.keys é de certa forma a categoria do objeto que esta sendo escolhido
  //dentro do array de words temos varias palavras dentro de varios arrays e 
  //cada um desses arrays possui um nome , que será tratado como sua key

  const pickWordAndCategory = () =>{
    //const categories retorna um array com todas as chaves de words
    const categories = Object.keys(words)
    //category vai ser atribuído como uma categoria do indice aleatório (obtido por math.random)
    //que é limitado pelo tamanho do array de categorias, dessa forma, escolhemos
    //uma categoria aleatória para iniciar o jogo
    const category =
     categories[Math.floor(Math.random() * Object.keys(categories).length)]
     console.log(category)
    //Pega uma palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length )]
    console.log(word)

    return {category, word}
  }

//ao chamar a função, o componente do inicio do jogo é lançado
  const startGame = () =>{
    //pick word and pick category
    const {word, category} = pickWordAndCategory()
    
    //criando um array de letras
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    
    console.log(wordLetters)

    //FillStates
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }

//processa a letra recebida
  const verifyLetter = (letter) =>{
    const normalizedLetter = letter.toLowerCase
    //checa se a letra já foi utilizada
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter) )
    {
      return
    }
    //confirma que a letra está certa ou remove uma chance
    //quando se mexe com array se usa []
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])

    }else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter])
    }


  }



//reinicia o Jogo/ reseta todos os status
  const reTry = () => {
    setGameStage(stages[0].name)
  }


  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame = {startGame}/>}
      {gameStage === 'game' && <Game 
      verifyLetter = {verifyLetter}
        pickedWord = {pickedWord}
        pickedCategory = {pickedCategory}
        letters = {letters}
        guessedLetters = {guessedLetters}
        wrongLetters = {wrongLetters}
        score = {score}
        /> }
      {gameStage === 'end' && <GameOver reTry = {reTry}/>}
     </div>
     
  );
}

export default App;
