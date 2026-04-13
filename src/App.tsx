import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Breeds } from "./Pages/Breeds/Breeds"
import { DogParks } from "./Pages/DogParks/DogParks"
import { Food } from "./Pages/Food/Food"
import { FurCare } from "./Pages/Fur/Fur"
import { Health } from "./Pages/Health/Health"
import { Home } from "./Pages/Home/Home"




function App() {
 

  return (
    <> 
     <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Breeds" element={<Breeds />} />
        <Route path="/DogParks" element={<DogParks />} />
        <Route path="/Health" element={<Health/>} />
        <Route path="/Food" element={<Food/>} />
        <Route path="/FurCare" element={<FurCare />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
