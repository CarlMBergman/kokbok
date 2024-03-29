import './AllRecipes.css'
import { useSelector } from 'react-redux'
import RecipeForList from '../components/RecipeForList'
import Nav from '../components/Nav'

function AllRecipes() {

    const allRecipes = useSelector((state) => { return state.recipes })

    const recipeComp = allRecipes.map((recipe) => {
        return <RecipeForList
         recipe={ recipe }
         rating={ recipe.rating }
         imgPath={ recipe.imgPath } 
         name={ recipe.name }
         key={ recipe.name } />
    })

    return (
        <section>
            {/* <nav className="nav">
                <NavBtn/>
                <Liked/>
            </nav> */}
            <Nav />
            { recipeComp }
        </section>
    )
}

export default AllRecipes