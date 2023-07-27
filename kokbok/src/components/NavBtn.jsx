import './NavBtn.css'
import navburger from './img/navburger.svg';
import { useState } from 'react';
import Slider from './Slider';


function NavBtn() {
    const [showNav, setShowNav] = useState(false)

    function handleClick() {
        setShowNav(current => !current)
    }

    return (
        <div className='nav__btnn'>
            <img src={ navburger } onClick={ handleClick } alt="navigation" />
            {showNav && (
                <Slider setShowNav={ setShowNav }/>
            )}
        </div>
        
    )
}

export default NavBtn