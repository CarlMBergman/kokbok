import './Liked.css'
import { useState } from "react";
import LikedDrop from './LikedDrop';
import liked from '../img/heartbtn.svg'

function Liked() {
    const [showLiked, setShowLiked] = useState(false);

    function showLikedRecipes() {
        setShowLiked(current => !current)
    }

    return (
        <aside className='liked'>
            <img src={ liked } className='liked__btn' onClick={ showLikedRecipes } alt="likedrecipe" />
            {showLiked && (
                <LikedDrop/>
            )}
        </aside>
        
    )
}

export default Liked