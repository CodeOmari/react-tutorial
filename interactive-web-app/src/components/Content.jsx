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
        <div>
            <div className="form">
                <form action={handleSubmit}>
                    {/* 
                        aria-label provides alternative text for elements that do not have visible text on the
                        screen, making them accessible to users using assistive technologies e.g. screen readers
                    */}

                    <input type="text" placeholder="e.g. Pepper " aria-label="add ingredient" className="text-box" name="ingredient" />

                    <button className="add-btn">&#43; Add ingredient</button>
                </form>
            </div>

            {
                ingredients.length > 0 &&

                <div className="ingredients-container">
                    <div className="ingredients-list">
                        <h2 className="list-title">Ingredients on hand:</h2>

                        <ul className="list">
                            {ingredientsList}
                        </ul>
                    </div>



                    {/* 
                        will only be displayed if the ingredients list is atleast 2 items using conditional
                        rendering
                    */}

                    {
                        ingredients.length > 2 &&

                        <div className="ai-container">
                            <p className="recipe-title">Ready for a recipe?</p>

                            <button className="recipe-btn">Get a recipe</button>

                            <p className="description">
                                Generate a recipe from your list of ingredients
                            </p>
                        </div>
                    }
                </div>
            }
        </div>
    )
}



