export default function Content(){
    return(
        <div className="form">
            <form action="#">
                {/* 
                    aria-label provides alternative text for elements that do not have visible text on the
                    screen, making them accessible to users using assistive technologies e.g. screen readers
                */}

                <input type="text" placeholder="e.g. Pepper " aria-label="add ingredient" className="text-box" />

                <button className="add-btn">&#43; Add ingredient</button>
            </form>
        </div>
    )
}