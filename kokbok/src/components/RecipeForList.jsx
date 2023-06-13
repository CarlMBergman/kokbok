import { useNavigate } from 'react-router-dom'
import './RecipeForList.css'
import Rating from './likedRecipes/Rating'
import LikeBtn from './LikeBtn'

function RecipeForList(props) {

    const navigate = useNavigate()

    return (
        <article className='recipelist'>
            <img className='recipelist__img' src={ props.imgPath } alt="img" />
            <div className='recipelist__info'>
                <h2>{ props.name }</h2>
                <Rating rating={ props.rating }/>
                <LikeBtn currentRecipe={ props.recipe }/>
                <button onClick={ () => navigate('/recipe', { state: { recipe: props.recipe }})}>Till receptet!</button>
            </div>
        </article>
    )
}

export default RecipeForList