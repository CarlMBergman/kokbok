import { useNavigate } from 'react-router-dom'
import './RecipeForList.css'
import Rating from './likedRecipes/Rating'

function RecipeForList(props) {

    const navigate = useNavigate()

    return (
        <article className='recipelist' onClick={ () => navigate('/recipe', { state: { recipe: props.recipe }})}>
            <img className='recipelist__img' src={ props.imgPath } alt="img" />
            <h2>{ props.name }</h2>
            <Rating rating={ props.rating }/>
        </article>
    )
}

export default RecipeForList