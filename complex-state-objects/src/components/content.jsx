import React from "react"
import avatar from "../assets/user.png"
import Star from "../components/Star"


// complex state Objects
export default function Content(){
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+254724461091",
        email: "johndoe@gmail.com",
        isFavorite: false
    })


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
                <Star isFilled={contact.isFavorite} onClick={toggleFavorite}/>
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