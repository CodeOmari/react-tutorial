import React from 'react'
import User from './assets/user.png'


export default function Content(){

    const [userName, setUserName] = React.useState("Joe")
    return(
        <div>
            <section>
                <img src={User} alt="user icon" />
            </section>
        </div>
    )
}