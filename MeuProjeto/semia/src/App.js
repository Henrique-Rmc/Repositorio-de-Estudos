import './App.css';
import Apresentacao from './components/Apresentacao';


const stages = [
  {id: 1 , name: "Apresentacao"}, 
  {id: 2 , name: "ListaForragens"}, 
  {id: 3 , name: "?"}, 
]

function App() {
  const [siteStage, setSiteStage] = useState(stages[0])
  



  return (
    <div className="App">

      <Apresentacao/>

      
    </div>
  );
}

export default App;
