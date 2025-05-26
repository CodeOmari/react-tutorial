// ternary operator is a shorthand way to write conditional expressions(if else)

import React from 'react'

export default function Content(){
    const[isGoingOut, setIsGoingOut] = React.useState(false)

    function changeMind(){
        setIsGoingOut(prev => !prev)
    }

    return(
        <div className='content'>
            <h2 className='title'>
                Do you want to go out tonight?
            </h2>

            <p>{isGoingOut}</p>

            <div className='btn'>
                <button onClick={changeMind} 
                    aria-label='{Current answer is ${isGoingOut ? "Yes" : "No"}.Click to change.}' className='change-btn'>
                        {isGoingOut ? 'Yes': 'No'}
                </button>
            </div>
        </div>
    )
}