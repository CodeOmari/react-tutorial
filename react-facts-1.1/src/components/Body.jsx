export default function MainContent(){
    return (
        <div className="content"> 
            <section className="title">
                <h1>Why Learn React</h1>
            </section>

            <section>
                <ul>
                    <li>In-Demand Skill</li>
                    <li>Component-Based Architecture</li>
                    <li>Strong Community & Ecosystem</li>
                    <li>Efficient and Fast UI Rendering</li>
                    <li>Active Development</li>
                </ul>
            </section>

            <section className="logo">
                <img src="src/assets/react-logo-half.png" alt="react logo" />
            </section>
        </div>
    )
}