import starFull from '../img/star-full.svg'
import starHalf from '../img/star-half.svg'

function Rating(props) {
    let rating = []

    function setRating() {
        if(props.rating % 2 == 0) {
            for(let i = 0; i < props.rating; i += 2) {
                rating.push(<img src={ starFull } key={ i }/>)
            }
        }
        else {
            for(let i = 0; i < props.rating - 1; i += 2) {
                rating.push(<img src={ starFull } key={ i }/>)
            }
            rating.push(<img src={ starHalf } key='leave me alone'/>)
        }
    }
    setRating();

    return (
        <div>
            { rating }
        </div>
    )
}

export default Rating