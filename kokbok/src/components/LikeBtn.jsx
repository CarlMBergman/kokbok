import { useState,useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { addRecipe, removeRecipe, localStorageUpdate } from "./action";
import Liked from '../components/img/liked.svg'
import notLiked from '../components/img/not-liked.svg'


function LikeBtn(props) {
    const dispatch = useDispatch()
    const userRecipes = useSelector((state) => { return state.userRecipes })
    const [like, setLike] = useState(notLiked);
    const index = userRecipes.findIndex(userRecipes => userRecipes.name === props.currentRecipe.name)

    useEffect(() => {
        function checkLiked() {
            if (index == -1) {
                setLike(notLiked)
            }
            else {
                setLike(Liked)
            }
        }
        checkLiked()
    })

    function onClick() {
        if (like === notLiked) {
            setLike(Liked)
            dispatch(addRecipe(props.currentRecipe))
        } 
        else {
            setLike(notLiked)
            dispatch(removeRecipe(props.currentRecipe))
        }
        dispatch(localStorageUpdate())
    }

    return (
        <img src={ like } alt="liked" onClick={ onClick }/>
    )
}

export default LikeBtn