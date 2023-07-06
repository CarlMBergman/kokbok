import './FilterFunction.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

import RecipeForList from './RecipeForList';

function FilterFunction() {

    const [checked, setChecked] = useState([]);
    const [show, toggleShow] = useState(true)
    let cookableRecipe = [];
    let recipesToShow = [];
    const allRecipes = useSelector((state) => { return state.recipes })
    // const [lengthCount, setLengthCount] = useState(0)
    let allIngredients = [];

    allRecipes.map((recipe) => {
        recipe.ingredients.map((ingredient) => {
            allIngredients.push(ingredient.ingredient)
        })
    })

    const ingredientComp = allIngredients.map((ingredient) => {
        return (
            <div className='filter__ingredient' key={ ingredient }>
                <input className='filter__ingredient-check' onChange={ handleChange } type="checkbox" value={ ingredient }/>
                <p>{ ingredient }</p>
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

    let matchingIngredients = 0;

    function handleClick() {
        cookableRecipe = [];
        recipesToShow = [];
        allRecipes.forEach((recipe) => {
            checked.forEach((checkedR) => {
                recipe.ingredients.forEach((ingredient) => {
                    if (checkedR == ingredient.ingredient ) {
                        matchingIngredients++
                        console.log(recipe.ingredients.length);
                        console.log(matchingIngredients);
                        if (matchingIngredients == recipe.ingredients.length){
                            console.log('lägger till recept');
                            cookableRecipe = [...cookableRecipe, recipe]
                            matchingIngredients = 0;
                        }
                    }
                })
            })
        })
        console.log(cookableRecipe);
        toggleShow(true)
    }
    recipesToShow = cookableRecipe.map((recipe) => {
        return <RecipeForList 
        recipe={ recipe }
        rating={ recipe.rating }
        imgPath={ recipe.imgPath } 
        name={ recipe.name }
        key={ recipe.name } />
    })
    console.log(recipesToShow);

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