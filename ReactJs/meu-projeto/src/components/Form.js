 /*
    A função Form é um evento de envio de  Formualario.
    onSubmit(Ao envio) significa que quando a função for executada, ela irá disparar
    a função cadastrarUsuario que imprime uma mensagem indicando que 
    o usuario foi cadastrado.

    placeholder= Indica que dentro daquele local haverá uma mensagem.

    input type= "text": Abre uma caixa de inseção com a legenda do placeholder

    input type= "submi": Dispara a função de envio responsavel por disparar o cadastrarUsuario

    "e" passado como parametro representa um evento. Ele para a execução do 
    formulario(Comportamento padrao seria enviar o formulario para o Servidr) e executa o que está sendo exibido dentro da funçção

*/

function Form(){
    
    function cadastrarUsuario(e){
        e.preventDefault();
        console.log("Cadastrou usuario");
    }


    return(
        <div>

        <h1>Meu Cadastro:</h1>
       
        <form onSubmit={cadastrarUsuario}>
            <div>
                <input type="text" placeholder="Digite seu nome"/>
            </div>
            <div>
                <input type="submit" value="Cadastrar" />
            </div>

        </form>

        </div>
    )
}

export default Form