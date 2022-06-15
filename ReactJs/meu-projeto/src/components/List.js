import Item from "./Item"
import styles from "./List.module.css"

function List(){
    return(
        <div className={styles.ListContainer}>
            <h1>Minha Lista</h1>   
            <ul >
                <Item marca = 'Ferrari' lancamento={1985}/>
                <Item marca = 'Porsh' lancamento={1964}/>
                <Item marca = 'fiat' lancamento={1910}/>
            </ul>
        </div>
    )

}
 
export default List