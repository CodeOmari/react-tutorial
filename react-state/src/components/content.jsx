// Either import {useState} from "react"  or import React from "react"

// State in React represents the parts of your app that can change over time(mutable)
// Components re-render effecting the changes

// Hooks in React allow function components to have access to state & other React features



import { useState } from 'react';

export default function Content(){
    // count is used to set the current state
    // setCount is used to update state
    // useState initialises state with 0
    const [count, setCount] = useState(0);

    function add(){
        setCount(count + 1)
    }

    function subtract(){
        setCount(count - 1)
    }


    return(
        <div className="content">
            <h2 className="title">
                What is your age?
            </h2>

            <p className='count'>{count}</p>

            <div className='buttons'>
                <button className="minus" onClick={subtract}>-</button>

                <button className="add" onClick={add}>+</button>
            </div>
        </div>
    )
}