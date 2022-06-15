/*
A função evento é uma representacao de um evento basico.
A função evento retorna um Header h1 e uma estrutura de button
ao click do button, a função "meuEvento" é chamada e realiza a função do evento
que nesse caso se limita a imprimir a frase 'Botao Ativado'	
*/

function Evento(){

    function meuEvento(){
        console.log('Botao Ativaaado')
    }
    return(
        <div>
            <p>Clique para Ativar o Evento</p>
            <button onClick={meuEvento}>Botao Ativar!</button>
        </div>

    )
}

export default Evento