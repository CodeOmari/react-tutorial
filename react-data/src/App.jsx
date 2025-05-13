import Header from "./components/Header"
import Content from "./components/Content"
import data from "./data"
import Marker from "./assets/marker.png"

// mapping data from data.js file using JS array.map() method
export default function App(){

   // can also be done outside the function
   const entryElements = data.map((entry) => {
      return(
        <Content 
         //  key = {entry.id}
         //  img = {entry.img}
         //  city = {entry.city}
         //  country = {entry.country}
         //  url = {entry.url}
         //  date = {entry.date}
         //  description = {entry.description}
          
         // entry = {entry}

         {... entry}

         marker = {Marker}
        />
      )
   })


   return (
      <div>
          <Header />

          {entryElements}
      </div>
   )
}