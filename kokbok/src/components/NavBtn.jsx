import './NavBtn.css'
import navburger from './img/navburger.svg';
import { useSelector } from "react-redux"


function NavBtn() {
    function handleClick() {
        console.log('hej');
    }

    return (
        <img src={ navburger } className='nav__btn' onClick={ handleClick } alt="navigation" />
    )
}

export default NavBtn