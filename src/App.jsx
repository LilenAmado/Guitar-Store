import Header from "./components/Header"
import Guitar from "./components/Guitar"
import Footer from "./components/Footer"
import { db } from "./data/db"

function App() {
  console.log(db)

  return (
    <>
      <Header />

        <main className="container-xl mt-5">
            <h2 className="text-center">Colección de instrumentos:</h2>

            <div className="row mt-5">
                <Guitar />
                
            </div>

        </main>

        <Footer />

    </>
  )
}

export default App