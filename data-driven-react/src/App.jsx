import Header from "./components/Header"
import Content from "./components/Content"
import Marker from "./assets/marker.png"

export default function App(){
   return (
      <div>
          <Header />


          <Content 
            img = "src/assets/kyoto.webp"
            marker = {Marker}
            country = "JAPAN"
            url = "https://maps.app.goo.gl/bCTfvLVX58EnHDcQ7"
            city = "Kyoto City"
            date = "12th Jan 2025 - 28th Jan 2025"
            description = 
                  "Kyoto is Japan’s cultural heart, famed for its ancient temples, geishas, and cherry blossoms. It blends tradition and beauty in every season."
          />

         <Content 
            img = "src/assets/italy.webp"
            marker = {Marker}
            country = "ITALY"
            url = "https://maps.app.goo.gl/GXdcScBiS3aDZDZ49"
            city = "Vatican City"
            date = "10th Feb 2025 - 24th Feb 2025"
            description = 
                  "Vatican City is the world’s smallest country and the spiritual center of the Catholic Church, home to St. Peter’s Basilica and the Sistine Chapel. It’s rich in art, history, and religious significance."
          />

         <Content 
            img = "src/assets/paris.webp"
            marker = {Marker}
            country = "FRANCE"
            url = "https://maps.app.goo.gl/VkGQGwofLgLv1zaBA"
            city = "Eiffel Tower"
            date = "15th Mar 2025 - 29th Mar 2025"
            description = 
                  "The Eiffel Tower is a 330-meter iron landmark in Paris, known for its iconic shape and panoramic city views. It symbolizes French art, romance, and engineering brilliance."
          />

      </div>
   )
}