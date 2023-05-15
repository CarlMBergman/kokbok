import { useSelector } from "react-redux"


function NavBtn() {
    function handleClick() {
        console.log('hej');
    }

    return (
        <button onClick={ handleClick }>
            hamburgarmeny
        </button>
    )
}

export default NavBtn