import './LikedRecipe.css'
import { useNavigate } from 'react-router-dom'

import Rating from './Rating';

function LikedRecipe(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/recipe', { state: { recipe: props.recipe }})
    }

    return (
        <div onClick={ handleClick }>
            <h3>{ props.name }</h3>
            <Rating rating={ props.rating }/>
        </div>
    )
}

export default LikedRecipe