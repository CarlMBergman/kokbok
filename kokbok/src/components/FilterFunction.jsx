import './FilterFunction.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

import RecipeForList from './RecipeForList';

function FilterFunction() {

    const [checked, setChecked] = useState([]);
    const [show, toggleShow] = useState(false)
    let cookableRecipe = [];
    const [recipesToShow, setRecipesToShow] = useState([]);
    const allRecipes = useSelector((state) => { return state.recipes })
    // const [lengthCount, setLengthCount] = useState(0)
    let allIngredients = [];

    allRecipes.map((recipe) => {
        recipe.ingredients.map((ingredient) => {
            const index = allIngredients.findIndex(ingredientSaved => ingredientSaved === ingredient.ingredient)
            if (allIngredients.length === 0) {
                allIngredients.push(ingredient.ingredient)
            }
            else if (index === -1) {
                allIngredients.push(ingredient.ingredient)
            }
            else {
    
            }
        })
    })

    const ingredientComp = allIngredients.map((ingredient) => {
        return (
            <div className='filter__ingredient' key={ ingredient }>
                <input className='filter__ingredient-check' onChange={ handleChange } type="checkbox" id={ ingredient } value={ ingredient }/>
                <label htmlFor={ ingredient }>{ ingredient }</label>
            </div>
        )
    })

    function handleChange(event) {
        let checkedCopy = [...checked]

        if (event.target.checked) {
            checkedCopy = [...checked, event.target.value]
        }
        else {
            checkedCopy.splice(checked.indexOf(event.target.value), 1)
        }
        setChecked(checkedCopy)
    }

    

    function handleClick() {
        cookableRecipe = [];
        setRecipesToShow([])
        allRecipes.forEach((recipe) => {
            let matchingIngredients = 0;
            checked.forEach((checkedR) => {
                recipe.ingredients.forEach((ingredient) => {
                    if (checkedR == ingredient.ingredient ) {
                        matchingIngredients++
                        if (matchingIngredients == recipe.ingredients.length){
                            console.log('lägger till recept');
                            cookableRecipe = [...cookableRecipe, recipe]
                        }
                    }
                })
            })
        })

        setRecipesToShow(cookableRecipe.map((recipe) => {
            return <RecipeForList 
            recipe={ recipe }
            rating={ recipe.rating }
            imgPath={ recipe.imgPath } 
            name={ recipe.name }
            key={ recipe.name } />
        }))
        toggleShow(true)
    }
    
   
    

    return (
        <section>
            <article className='filter'>
                {ingredientComp}
            </article>
            <button onClick={ handleClick } className='start__btn filter__btn'>HITTA RECEPT</button>
            {show && ([recipesToShow])}
        </section>
    )
}

export default FilterFunction