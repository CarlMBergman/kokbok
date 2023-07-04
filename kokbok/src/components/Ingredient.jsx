import './Ingredient.css'
import { useEffect } from 'react';

function Ingredient(props) {

    const amount = props.portions * props.ingredient.amount
    
    useEffect(() => {
        console.log(amount);
    }, [])

    return (
        <aside className='ingredient'>
            <p className='ingredient__text'>{ amount > 0 && (amount) } {props.ingredient.measurement} {props.ingredient.ingredient}</p>
        </aside>
    )
}

export default Ingredient