import './FindRecipe.css'
import FilterFunction from '../components/FilterFunction'
import Nav from '../components/Nav'

function FindRecipe() {


    return (
        <section>
            <Nav />
            <h1>Hitta Recept</h1>
            <h3>Klicka in alla ingredienser du har hemma och se vad du kan laga med det!</h3>
            <FilterFunction/>
        </section>
    )
}

export default FindRecipe