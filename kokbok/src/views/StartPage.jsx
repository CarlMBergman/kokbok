import './startPage.css'
import NavBtn from "../components/navBtn"
import Liked from "../components/likedRecipes/Liked"
import Rating from '../components/likedRecipes/Rating'
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import LikeBtn from '../components/LikeBtn'


function StartPage() {
    const recipes = useSelector((state) => { return state.recipes })
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

    function toRecipe() {
        navigate('/recipe', { state: { recipe: currentRecipe }})
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
                <section className='start__meal'>
                    <h2 className='start__meal--heading'>{ currentRecipe.name }</h2>
                    <img className='start__img' src={ currentRecipe.imgPath } alt="Här ska bild på maten ligga" />
                    <div className='start__ratelike'>
                        <Rating rating={ currentRecipe.rating }/>
                        <LikeBtn currentRecipe={ currentRecipe }/>
                    </div>
                    <button className='start__btn' onClick={ toRecipe }>Till receptet!</button>
                </section>
            )}
            
        </section>
       
    )
}

export default StartPage