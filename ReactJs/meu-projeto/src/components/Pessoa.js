import styles from './Pessoa.module.css'

function Pessoa({nome ,idade, profissao, foto}){

    return( 
    <div className = {styles.PessoaContainer}> 
        <img src={foto} alt = {nome} />
        <h2 className = {styles.PessoaContent}>
        <p>Nome: {nome}</p> 
        <p>Idade: {idade}</p>
        <p>Profissao: {profissao}</p>
        </h2>
    </div>
    )
}

export default Pessoa