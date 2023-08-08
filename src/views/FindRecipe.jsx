import './FindRecipe.css'
import NavBtn from '../components/NavBtn'
import Liked from '../components/likedRecipes/Liked'
import FilterFunction from '../components/FilterFunction'

function FindRecipe() {


    return (
        <section>
            <nav className="nav">
                <NavBtn/>
                <Liked/>
            </nav>
            <FilterFunction/>
        </section>
    )
}

export default FindRecipe