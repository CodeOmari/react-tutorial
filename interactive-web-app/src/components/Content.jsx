import React from "react"

export default function Content(){

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}> {ingredient} </li>
    ))

    function handleSubmit(formData){
        // event.preventDefault()
        
        const newIngredient = formData.get('ingredient')

        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    return(
        <div className="form">
            <form action={handleSubmit}>
                {/* 
                    aria-label provides alternative text for elements that do not have visible text on the
                    screen, making them accessible to users using assistive technologies e.g. screen readers
                */}

                <input type="text" placeholder="e.g. Pepper " aria-label="add ingredient" className="text-box" name="ingredient" />

                <button className="add-btn">&#43; Add ingredient</button>

                <ul className="list">
                    {ingredientsList}
                </ul>
            </form>
        </div>
    )
}