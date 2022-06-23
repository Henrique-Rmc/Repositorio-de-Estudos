import React from 'react'
import "./Apresentacao.css"
import TextoApresent from './TextoApresent'
import ForrageirasList from './ForrageirasList'

const Apresentacao = () => {



  return (

    <div className='inicial'>

        <div className='topInfo'> 
            <li>Sobre </li>
            <li>Contato</li>
        </div>

        <img src ='/insaLogo.jpg' alt = 'logoProjeto'></img>
        <h1>Plantas Forrageiras Nativas</h1>
        <p><TextoApresent/></p>

        <button onClick={<ForrageirasList/>}>Clique aqui para Conhecer as Forrageiras</button>


    </div>
  
  )
}

export default Apresentacao