import React from "react"

// Allows you to display differrent UI elements based on specific conditions
// This makes an aplication more responsive and interactive
export default function Content(){

    const [unreadMessages, setUnreadMessages] = React.useState(["a", "b", "c"])

    return(
        <div>
            {
                unreadMessages.length > 0 && 

                <h1>You have {unreadMessages.length} unread messages!</h1>
            }
        </div>
    )
}