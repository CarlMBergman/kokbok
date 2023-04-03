import NavBtn from "../components/navBtn"
import Liked from "../components/Liked"
import { useState } from "react"
import { useSelector } from "react-redux"


function StartPage() {
    const recipes = useSelector((state) => { return state.recipes })
    console.log(recipes);

    const [btnText, setBtnText] = useState('Ge mig tips!')
    const [currentRecipe, setCurrentRecipe] = useState({})

    function newRecipe() {
        setBtnText('Ge mig ett nytt tips!')
        console.log(currentRecipe);
    }

    return (
        <section>
            <nav>
                <NavBtn/>
                <Liked/>
            </nav>
                <h1>Best of Bergmans kök</h1>
                <button onClick={ newRecipe }>{ btnText }</button>
        </section>
       
    )
}

export default StartPage