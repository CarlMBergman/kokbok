import './startPage.css'
import NavBtn from "../components/navBtn"
import Liked from "../components/likedRecipes/Liked"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import MPRecipe from '../components/mPRecipe'


function StartPage() {
    const recipes = useSelector((state) => { return state.recipes })
    const userRecipes = useSelector((state) => { return state.userRecipes })
    const navigate = useNavigate()
    const [btnText, setBtnText] = useState('Ge mig tips!')
    const [currentRecipe, setCurrentRecipe] = useState({})
    const [show, setShow] = useState(false)

    function newRecipe() {
        let randomNum = Math.random() * recipes.length
        let roundedNum = parseInt(randomNum)
        setCurrentRecipe(recipes[roundedNum])
        setShow(true)
        setBtnText('Ge mig ett nytt tips!')
    }

    return (
        <section className='start'>
            <nav className="nav">
                <NavBtn/>
                <Liked/>
            </nav>
            <section className='start__idea'>
                <h1 className='start__heading'>Best of Bergmans kök</h1>
                <button className='start__btn' onClick={ newRecipe }>{ btnText }</button>
            </section>
            {show && (
                <MPRecipe currentRecipe={ currentRecipe }/>
            )}   
        </section>
       
    )
}

export default StartPage