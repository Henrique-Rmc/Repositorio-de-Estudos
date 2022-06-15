import styles from './Funcionario.module.css'

function Funcionario({nome, id, setor}){
    
    return(
    <div className = {styles.funcionarioContainer}>

    <h2>Nome: {nome}</h2>
    <p>Id: {id}</p>
    <p>setor: {setor}</p>
    </div>
    )
}

export default Funcionario