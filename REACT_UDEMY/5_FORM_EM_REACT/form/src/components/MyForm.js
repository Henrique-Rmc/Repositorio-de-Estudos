import React from 'react'
import './MyForm.css'
import {useState} from 'react'


const MyForm = () => {
    //3 - gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        console.log(e.target.value);
    }

    console.log(email)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o Form")
        console.log(name, email)
    }

  return (
    <div>
        {/**5- Envio de Form */}


        { /* 1 - criacao de form*/}
        
        <form onSubmit={handleSubmit}>
            
            <div>
                <label htmlFor = "name"> Nome: </label>
                <input 
                type = "text" 
                name = "name" 
                placeholder="Digite seu Nome"
                onChange={handleName}
                />
                
            </div>

            {/**2- Label envolvendo input */}

            <label>
                <span>E-mail</span>
                {/**4- Simplificação de label envolvendo input 
                 * Simplificação da manipulaçao de State
                */}
                <input type = "email" email = "email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>

                <span>Data de nascimento</span>
                <input type = "data" data = "data" placeholder="Digite o ano do seu nascimento"/>
            </label>

          

            <input type = "submit" value = "Enviar"/>

        </form>

    </div>
  )
}

export default MyForm