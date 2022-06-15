import PropTypes from 'prop-types'

function Item({marca, lancamento}){
    return(
        <>
            <li>
                {marca} - {lancamento}
            </li>
        </>
    )
}
Item.propTypes = {
    marca : PropTypes.string.isRequired,
    lancamento : PropTypes.number.isRequired
}
Item.defaultProps = {
    marca: 'Faltou Marca',
    lancamento: 0
}

export default Item