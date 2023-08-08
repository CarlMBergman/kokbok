import './Nav.css'
import NavBtn from '../components/NavBtn'
import Liked from '../components/likedRecipes/Liked'
import logo from '../components/img/logobook.svg'

function Nav() {

    return (
        <nav className='nav'>
            <NavBtn />
            <Liked />
        </nav>
    )
}

export default Nav