import App from "./App"
import {createRoot} from "react-dom/client"


function MainPage(){
  return(
    <App />
  )
}

createRoot(document.getElementById('root')).render(
  <MainPage />
)