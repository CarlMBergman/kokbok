import './LikedRecipe.css'
import { useNavigate } from 'react-router-dom'

import Rating from './Rating';
import LikeBtn from '../LikeBtn';

function LikedRecipe(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/recipe', { state: { recipe: props.recipe }})
    }

    return (
        <div className='liked__drop-recipe'>
            <div  onClick={ handleClick }>
                <h3>{ props.name }</h3>
                <Rating rating={ props.rating }/>    
            </div>
            <LikeBtn currentRecipe={ props.recipe }/>
        </div>
    )
}

export default LikedRecipe