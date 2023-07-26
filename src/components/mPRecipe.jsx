import './mPRecipe.css'
import Rating from "./likedRecipes/Rating"
import LikeBtn from "./LikeBtn"
import { useNavigate } from "react-router-dom"

function MPRecipe(props) {

    const navigate = useNavigate();

    function toRecipe() {
        navigate('/recipe', { state: { recipe: props.currentRecipe }})
    }

    return (
        <section className='start__meal'>
                    <h2 className='start__meal--heading'>{ props.currentRecipe.name }</h2>
                    <img className='start__img' src={ props.currentRecipe.imgPath } alt="Här ska bild på maten ligga" />
                    <div className='start__ratelike'>
                        <Rating rating={ props.currentRecipe.rating }/>
                        <LikeBtn currentRecipe={ props.currentRecipe }/>
                    </div>
                    <button className='start__btn' onClick={ toRecipe }>Till receptet!</button>
                </section>
    )
}

export default MPRecipe