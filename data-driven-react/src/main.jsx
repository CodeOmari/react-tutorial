import { createRoot } from 'react-dom/client'
import App from "./App"

function MainPage(){
  return (
    <App />
  )
}

createRoot(document.getElementById('root')).render(
  <MainPage />
)
