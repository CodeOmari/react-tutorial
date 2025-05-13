import { createRoot } from 'react-dom/client'
import Content from "./Page"
import Declare from "./Info"

// To have two or more elements rendered together, they must kept inside a parent element e.g div, main
// createRoot(document.getElementById('root')).render(
//   <main>
//     <img src="src/assets/react.svg" alt="React logo" />

//     <h1>React Facts</h1>

//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has over 200K stars on Github</li>
//       <li>Is maintained by Meta</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </main>
// )

// Make the code readable and maintainable by placing each component on its own jsx file
// Import the components then using one main component render them

function FullContent(){
  return(
    <>
      <Content/>
      <Declare/>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <FullContent />
)


// Instead of using div or main as parent elements you can use Fragment
// Fragment is a lightweight wrapper used to group multiple elements without adding nodes to the DOM
// import { Fragment } from "react"
// Specify a component
// Inside it add the <Fragment>...</Fragment> element as the parent element

// You can also create a Fragment without having to import it
// Just use <>....</> as your parent element