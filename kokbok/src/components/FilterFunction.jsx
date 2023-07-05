import './FilterFunction.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';


function FilterFunction() {

    const [checked, setChecked] = useState([]);
    let cookableRecipe = []
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

    function handleClick() {
        allRecipes.forEach((recipe) => {
            checked.forEach((checkedR) => {
                recipe.ingredients.forEach((ingredient) => {
                    if (checkedR != ingredient.ingredient ) {
                        console.log('matchade inte');
                    }
                    else {
                        cookableRecipe = [...cookableRecipe, recipe]
                    }
                })
            })
        })
        console.log(cookableRecipe);
    }

    return (
        <section>
            <article className='filter'>
                {ingredientComp}
            </article>
            <button onClick={ handleClick } className='start__btn filter__btn'>HITTA RECEPT</button>
            {/* <aside>{ cookableRecipe.name }</aside> */}
        </section>
    )
}

export default FilterFunction