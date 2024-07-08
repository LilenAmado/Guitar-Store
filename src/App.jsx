import { useState } from "react"
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import Footer from "./components/Footer"
import { db } from "./data/db"
import { useEffect } from "react"

function App() {
  
  // "Base de datos" de Guitarras:
  
    // State: 
    const [data, setData] = useState([])

    // useEffect:
    useEffect(() => {
      setData(db)
    }, [])

      //console.log(data)

  return (
    <>
      <Header />

        <main className="container-xl mt-5">
            <h2 className="text-center">Colección de instrumentos:</h2>

            <div className="row mt-5">
              
              { // Recorre el array
                data.map((data) => {
                    return(
                      <Guitar 
                        key = {data.id}
                        name = {data.name}
                        image = {data.image}
                        description = {data.description}
                        price = {data.price}

                        // key = {data.id}
                        // data = {data}
                      /> // Props
                    )
                  }
                )
              }          
                
            </div>

        </main>

        <Footer />

    </>
  )
}

export default App