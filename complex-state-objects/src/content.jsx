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


    return(
        <div className="container">
            <div className="image">
                <img src={avatar} alt="User profile" className="profile" />
            </div>

            <div className="favorite">
                <img src={starIcon} alt="favorite logo" className="logo" />
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