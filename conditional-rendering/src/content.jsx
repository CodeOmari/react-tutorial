import React from "react"

// Allows you to display different UI elements based on specific conditions
// This makes an aplication more responsive and interactive
export default function Content(){

    const [unreadMessages, setUnreadMessages] = React.useState([])

    // Using conditional rendering with ternary

    function messageChecker(){
        if (unreadMessages.length === 0){
            return "You're all caught up!"
        } else if(unreadMessages.length === 1){
            return 'You have 1 unread message'
        } else{
            return `You have ${unreadMessages.length} unread messages`
        }
    }

    return(
        <div>
            <h1>{messageChecker()}</h1>
        </div>


        // Using conditional rendering with &&
        // <div>
        // {
        //     unreadMessages.length > 0 && 

        //     <h1>You have {unreadMessages.length} unread messages!</h1>
        // }
        // </div>
    )
}