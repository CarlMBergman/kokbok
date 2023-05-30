import './Ingredient.css'

function Ingredient(props) {

    return (
        <aside className='ingredient'>
            <p className='ingredient__text'>{props.ingredient}</p>
        </aside>
    )
}

export default Ingredient