import './LikedDrop.css'
import { useSelector } from "react-redux"
import LikedRecipe from './LikedRecipe'
import triangle from '../img/triangle-liked.svg'


function LikedDrop() {
    const likedRecipes = useSelector((state) => { return state.userRecipes })

    const recipes = likedRecipes.map((recipe) => {
        return <LikedRecipe recipe={ recipe } rating={ recipe.rating } name={ recipe.name } key={ recipe.name }/>
    })

    return (
        <div className='liked__drop'>
            <img src={ triangle } className='liked__drop--triangle' alt="" />
            <aside className='liked__drop--content'>
                { recipes }
            </aside>
        </div>
       
    )
}

export default LikedDrop