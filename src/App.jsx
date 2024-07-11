import { useState } from "react"
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import Footer from "./components/Footer"
import { db } from "./data/db"
import { useEffect } from "react"

function App() {
  
  // "Base de datos" de Guitarras:
  
    // State: 
      // DB: 
      const [data, setData] = useState([])
      // Agregar al carrito:
      const [carrito, setCarrito] = useState([]) //cart

    // useEffect:
      // DB:
      //console.log(data)
      useEffect(() => {
        setData(db)
      }, [])
      
    // Funciones:
      //Agregar al carrito los elementos
      function addToCarrito(data){
          //console.log("Agregando al carrito")

        const existe = carrito.findIndex((guitar) => {
          return guitar.id === data.id
        } ) 
          // const existe = carrito.findIndex((guitar) => guitar.id === data.id);
          //console.log(existe) // Si existe devuelve la posición del indice del array, si no existe -1
        if (existe === -1){
          setCarrito([...carrito, data]) // data o items
        }else{
          console.log("Existe en el carrito este item")
        }
        
      }

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
                        // key = {data.id}
                        // id = {data.id}
                        // name = {data.name}
                        // image = {data.image}
                        // description = {data.description}
                        // price = {data.price}

                        
                        key = {data.id}
                        data = {data}
                        carrito = {carrito}
                        setCarrito = {setCarrito}
                        addToCarrito = {addToCarrito}
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