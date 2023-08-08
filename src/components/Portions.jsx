import './Portions.css'

function Portions(props) {



    return (
        <div className='portions'>
            <div className='portions__sub' onClick={ () => props.setPort(props.port - 1) } >-</div>
            <div className='portions__num'>{props.port}</div>
            <div className='portions__add' onClick={ () => props.setPort(props.port + 1) }>+</div>
        </div>
    )
}

export default Portions