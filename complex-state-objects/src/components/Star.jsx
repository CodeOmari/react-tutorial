import starFilled from "../assets/star-filled.png"
import starEmpty from "../assets/star-empty.png"

// Passing State as Props
export default function Star(props){

    let starIcon = props.isFilled ? starFilled : starEmpty

    return(
            <button className="fav-btn"
                onClick={props.onClick}
                aria-label={props.isFilled ? "Remove from favorite" : "Add to favorite"}
                // aria-pressed indicates the pressed state of a toggle button for users who
                // rely on screen readers or other assistive technologies
                aria-pressed={props.isFilled}>
                <img src={starIcon} 
                alt={props.isFilled ? 'Filled star' : 'empty star'} className="logo" />
            </button>
    )
}