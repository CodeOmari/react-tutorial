import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

// React is front-end JavaScript library
// It is a tool for building UI components


// createRoot() function and render() method
// React renders HTML to the web page using the above two.
// import createRoot from react-dom/client
// createRoot() function is used to define where a React component should be displayed.
// render() method is called to define the React component to be rendered
createRoot(document.getElementById('root')).render(
  <h3>Why learn React:</h3>
);


createRoot(document.getElementById('info')).render(
  <ul>
    <li>High demand in the job market</li>
    <li>Builds large scale apps efficiently</li>
    <li>Fast Performance</li>
    <li>Strong community and ecosystem</li>
  </ul>
);


// React.createElement
// Used also to render markup text
// Import createElement from react
// Takes in 3 values: Type of element, props and the text to be displayed


createRoot(document.getElementById('welcome')).render(
  createElement('h4', null, 'Welcome to React Development')
);



// JSX stands for JavaScript XML
// JSX allows us to write HTML in React without any createElement or appendChild() methods
// JSX will convert the HTML tags into react elements
createRoot(document.getElementById('text')).render(
  <h4>I use JSX to write HTML in React.</h4>
);

// Expressions in JSX
// Expressions are written inside cury braces
createRoot(document.getElementById('choice')).render(
  <h4>React is {5 + 5} times better with JSX!</h4>
);



// React Components
// This are functions that return HTML elements
// They are independent adn reusabe bits of code
function MyAwesomeNavbar() {
  return (
      // use attribute className instead of class since class keyword is a reserved word in JavaScript
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">MyAwesomeNavbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExample03">
                  <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                          <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Action</a></li>
                              <li><a className="dropdown-item" href="#">Another action</a></li>
                              <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                      </li>
                  </ul>
                  <form role="search">
                      <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                  </form>
              </div>
          </div>
      </nav>
  )
}

function MainContent(){
  return <h4>React is great!</h4>
}

createRoot(document.getElementById('navbar')).render(
  <div>
    {/* rendering a component uses similar syntax as normal HTML */}
    <MyAwesomeNavbar/>
    <MainContent/>
  </div>
);

// rendering HTML using appendChild() method
const h3 = document.createElement('h4');
h3.textContent = 'This is imperative coding';
h3.className = 'header';
document.getElementById('append').appendChild(h3);
