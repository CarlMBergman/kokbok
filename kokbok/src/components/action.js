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

function localStorageUpdate() {
    return {
        type: 'updateLocalStorage'
    }
}

export { addRecipe, removeRecipe, localStorageUpdate }