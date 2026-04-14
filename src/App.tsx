import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Temperament } from "./Pages/Temperament/Temperament"
import { DogPark } from "./Pages/DogPark/DogPark"
import { Description } from "./Pages/Description/Description"
import { History } from "./Pages/History/History"
import { Home } from "./Pages/Home/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Temperament" element={<Temperament />} />
          <Route path="/DogPark" element={<DogPark />} />
          <Route path="/descriptions" element={<Description />} />
          <Route path="/History" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
