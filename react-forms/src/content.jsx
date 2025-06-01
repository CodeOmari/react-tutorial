import React from "react"

export default function Content(){

    function signUp(formData){
        // event.preventDefault()

        // refers to the form
        // const formElement = event.currentTarget 
        // const formData = new FormData(formElement)

        // resets the form
        // formElement.reset()

        // use the value of the name attribute from the form
        const email = formData.get("email")
        const password = formData.get("passwd")
    }
    return(
        <div className="signup-form">
            <h1 className="form-name">Signup form</h1>

            <form className="form" action={signUp}>
                <label htmlFor="email">Email:</label> <br />
                <input type="email" id="email" name="email" placeholder="e.g johndoe@gmail.com" />

                <br />

                <label htmlFor="passwd">Password:</label> <br />
                <input type="password" id="passwd" name="passwd" />

                <br />

                {/* This button behaves same as <input type="Submit" /> */}
                <button className="submit-btn">Submit</button>
            </form>
        </div>
    )
}