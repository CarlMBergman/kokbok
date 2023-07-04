import { useState,useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { addRecipe, removeRecipe } from "./action";


function LikeBtn(props) {
    const dispatch = useDispatch()
    const userRecipes = useSelector((state) => { return state.userRecipes })
    const [like, setLike] = useState('/src/components/img/not-liked.svg');

    
    useEffect(() => {
        function checkLiked() {
            userRecipes.forEach(recipe => {
                if (props.currentRecipe.name === recipe.name) {
                    setLike('/src/components/img/liked.svg')
                }else {
                    setLike('/src/components/img/not-liked.svg')
                }
            });
        }
        checkLiked();
        })

    function onClick() {
        if (like === '/src/components/img/not-liked.svg') {
            setLike('/src/components/img/liked.svg')
            dispatch(addRecipe(props.currentRecipe))
        } else {
            setLike('/src/components/img/not-liked.svg')
            dispatch(removeRecipe(props.currentRecipe))
        }
    }

    return (
        <img src={ like } alt="liked" onClick={ onClick }/>
    )
}

export default LikeBtn