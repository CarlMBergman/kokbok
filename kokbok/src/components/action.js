function addRecipe(value) {
    return {
        type: 'addToUserRecipes',
        payload: value
    }
}

function removeRecipe(value) {
    return {
        type: 'removeFromUserRecipes',
        payload: value
    }
}

export { addRecipe, removeRecipe }