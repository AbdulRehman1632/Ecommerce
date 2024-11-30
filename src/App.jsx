import React from 'react'
import Home from './Components/Home/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import ProductNav from './Components/ProductNav/ProductNAv'
import Mens from './Components/Mens/Mens'
import Women from './Components/Women/Women'
import MenWatches from './Components/MenWatches/MenWatches'
import Jewellery from './Components/Jewellery/Jewellery'
import ProducDetail from './Components/ProductDetail/ProducDetail'
import Orderfield from './Components/OrderField/Orderfield'
import Beauty from './Components/Beauty/Beauty'
import WomenBags from './Components/WomenBags/WomenBags'
import Fragrances from './Components/Fragrances/Fragrances'
import NewArrival from './Components/NewArrival/NewArrival'
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <Router>
        <ProductNav/>
        <ToastContainer />

        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Home/>} path="home"/>
          <Route element={<Mens/>} path="MenShirts"/>
          <Route element={<Women/>} path="Women"/>
          <Route element={<MenWatches/>} path="MenWatches"/>
          <Route element={<Jewellery/>} path="Jewellery"/>
          <Route element={<Beauty/>} path="Beauty"/>
          <Route element={<WomenBags/>} path="WomenBags"/>
          <Route element={<Fragrances/>} path="Fragrances"/>
          <Route element={<NewArrival/>} path="NewArrival"/>
          <Route element={<ProducDetail/>} path="/ProductDetail/:id"/>
          <Route element={<Orderfield/>} path="/Checkout"/>

          {/* <Route element={} path=""/> */}


        </Routes>
        </Router>
  
    </div>
  )
}

export default App
