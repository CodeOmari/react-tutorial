import React from "react"


// Mapping array data using useState hook
export default function Content(){

    const [favoriteFoods, setFavoriteFoods] = React.useState([])

    const ingredients = ['Chicken', 'Oregano', 'Tomatoes']


    const ingredientList = favoriteFoods.map(ingredient => 
        <li key={ingredient}>
            {ingredient}
        </li>
    )

    function addIngredients(event){
        // method that prevents default behaviour of an event from occurring
        // when you click the add ingredient button it triggers a form submission
        // this reloads the page by default.
        event.preventDefault()
        setFavoriteFoods(prevFav => [...prevFav, ingredients[prevFav.length]])
    }

    return(
        <div className="container">
            <form className="form">
                <input type="text" placeholder="e.g. Onion" className="text" />

                <button className="add-btn" onClick={addIngredients}>&#43; add ingredient</button>
            </form>

            <ul className="new-ingredients">
                {ingredientList}
            </ul>
        </div>
    )
}