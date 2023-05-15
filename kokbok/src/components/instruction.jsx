import './Instruction.css'

function Instruction(props) {

    return (
        <aside className='instruction'>
            <p className='instruction__num'>{ props.stepNr }</p>
            <p className='instruction__text'> { props.instruction }</p>
        </aside>
    )
}

export default Instruction