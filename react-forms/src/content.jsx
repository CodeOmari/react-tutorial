import React from "react"

export default function Content(){

    // formData handles all the commented section
    function signUp(formData){
        // event.preventDefault()

        // refers to the form
        // const formElement = event.currentTarget 
        // const formData = new FormData(formElement)

        // resets the form
        // formElement.reset()

        // use the value of the name attribute from the form
        // const email = formData.get("email")
        // const password = formData.get("passwd")
        // const description = formData.get("description")
        // const gender = formData.get("gender")


        // Retrieves all form data at once as objects
        const data = Object.fromEntries(formData)
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

                <legend className="title">Gender:</legend>

                <fieldset className="select-gender">
                    <label htmlFor="gender">
                        <input type="radio" name="gender" id="gender" value="male" />
                        Male
                    </label> <br />

                    <label htmlFor="gender">
                        <input type="radio" name="gender" id="gender" value="female" />
                        Female
                    </label>
                </fieldset>

                <br />

                <label htmlFor="description">Description:</label> <br />
                <textarea name="description" id="description" defaultValue="Write about your work experience here">

                </textarea>

                <br />

                {/* This button behaves same as <input type="Submit" /> */}
                <button className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

// use <textarea>....</textarea> for longer text descriptions

// for checkboxes, to get its data use
// const dietary = formData.getAll("[name value]")
// const allData = {...data, dietary}