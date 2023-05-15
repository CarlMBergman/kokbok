import './Recipe.css'
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import Instruction from "../components/instruction";
import Ingredient  from "../components/Ingredient";
import Liked       from '../components/likedRecipes/Liked';

function Recipe() {
    const navigate = useNavigate();
    const navigationState = useLocation();
    const [showInst, setShowInst] = useState(true);
    const [showIng, setShowIng] = useState(false);

    const instructionComponent = navigationState.state.recipe.cooking.map((instruction) => {
        return <Instruction stepNr={ instruction.stepNr } instruction={ instruction.step } key={ instruction }/>
    })
    const ingredientComponent = navigationState.state.recipe.ingredients.map((ingredient) => {
        return <Ingredient ingredient={ ingredient } key={ ingredient }/>
    })

    function toggleInst() {
        setShowInst(true);
        setShowIng(false);
    }

    function toggleIng() {
        setShowIng(true);
        setShowInst(false);
    }

    return (
        <article className="recipe">
            <header className='recipe__heading'>
                <button className='recipe__heading--btn' onClick={ () => navigate('/') }>Go back</button>
                <Liked/>
            </header>
            <h1 className='recipe__heading--text'>{ navigationState.state.recipe.name }</h1>
            <img className='recipe__img' src={ navigationState.state.recipe.imgPath } alt="" />
            <section className='recipe__box'>
                <div>
                    <button className='recipe__btn' onClick={ toggleInst }>Ingredienser</button>
                    <button className='recipe__btn' onClick={ toggleIng }>Instruktioner</button>
                </div>
                    {showInst && (
                        <div className='recipe__recipe'>
                            { ingredientComponent }
                        </div>
                        
                    )}
                    {showIng && (
                        <div className='recipe__recipe'>
                            { instructionComponent }
                        </div>
                    )}
            </section>
            
        </article>
    )
}

export default Recipe