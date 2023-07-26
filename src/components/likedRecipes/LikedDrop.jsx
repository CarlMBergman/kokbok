import './LikedDrop.css'
import { useSelector } from "react-redux"
import LikedRecipe from './LikedRecipe'


function LikedDrop() {
    const likedRecipes = useSelector((state) => { return state.userRecipes })

    const recipes = likedRecipes.map((recipe) => {
        return <LikedRecipe recipe={ recipe } rating={ recipe.rating } name={ recipe.name } key={ recipe.name }/>
    })

    return (
        <div className='liked__drop'>
            <img src="/src/components/img/triangle-liked.svg" className='liked__drop--triangle' alt="" />
            <aside className='liked__drop--content'>
                { recipes }
            </aside>
        </div>
       
    )
}

export default LikedDrop