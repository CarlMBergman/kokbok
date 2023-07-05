import './Slider.css'
import { useNavigate } from 'react-router-dom'
import cross from './img/cross.svg'

function Slider(props) {

    const navigate = useNavigate()

    function closeSlider() {
        props.setShowNav(false)
    }

    return (
        <aside className='slider'>
            <img className='slider__close' onClick={ closeSlider } src={ cross } alt="close" />
            <button className='slider__btn' onClick={ () => navigate('/') }>HEM</button>
            <button className='slider__btn' onClick={ () => navigate('/allrecipes') }>ALLA RECEPT</button>
            <button className='slider__btn' onClick={ () => navigate('/') }>DINA GILLADE</button>
            <button className='slider__btn' onClick={ () => navigate('/findrecipe') }>HITTA RECEPT</button>
        </aside>
    )
}

export default Slider