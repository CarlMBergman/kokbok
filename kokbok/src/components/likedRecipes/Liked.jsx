import './Liked.css'
import { useState } from "react";
import LikedDrop from './LikedDrop';

function Liked() {
    const [showLiked, setShowLiked] = useState(false);

    function showLikedRecipes() {
        setShowLiked(current => !current)
        console.log(showLiked);
    }

    return (
        <aside className='liked'>
            <img src="/src/components/img/heartbtn.svg" className='liked__btn' onClick={ showLikedRecipes } alt="likedrecipe" />
            {showLiked && (
                <LikedDrop/>
            )}
        </aside>
        
    )
}

export default Liked