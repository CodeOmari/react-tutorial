import React from "react"
import avatar from "./assets/user.png"
import starFilled from "./assets/star-filled.png"
import starEmpty from "./assets/star-empty.png"

// complex state Objects
export default function Content(){
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+254724461091",
        email: "johndoe@gmail.com",
        isFavorite: true
    })

    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite(){
        setContact(prevContact => {
            return{
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return(
        <div className="container">
            <div className="image">
                <img src={avatar} alt="User profile" className="profile" />
            </div>

            <div className="favorite">
                <button onClick={toggleFavorite} className="fav-btn"
                    aria-label={contact.isFavorite ? "Remove from favorite" : "Add to favorite"}
                    // aria-pressed indicates the pressed state of a toggle button for users who
                    // rely on screen readers or other assistive technologies
                    aria-pressed={contact.isFavorite}>
                    <img src={starIcon} 
                        alt={contact.isFavorite ? 'Filled star' : 'empty star'} className="logo" />
                </button>
            </div>

            <div className="info">
                <h2 className="name">
                    {contact.firstName} {contact.lastName}
                </h2>
            </div>

            <div className="phone">
                <p className="phone">
                    {contact.phone}
                </p>
            </div>

            <div className="email">
                <p>
                    {contact.email}
                </p>
            </div>
        </div>
    )
}