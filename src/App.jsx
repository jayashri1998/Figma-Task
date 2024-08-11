
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Service from "./Components/OurService/Service"
import About from "./Components/AboutUs/About"
import OurClient from "./Components/OurClient/OurClient"
import ClientDetails from "./Components/OurClient/ClientDetails"
import Login from "./Components/Login"
import Singup from "./Components/Signup"


function App() {
 

  return (
    <>
  <Router>
  <Layout>
  
  <Routes>
 <Route path="/" element={<Home/>}/>
  <Route path="/ourservices" element={<Service/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path='/ourclient' element={<OurClient/>}/>
  <Route path="/clientdeatils" element={<ClientDetails/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path='/signup' element={<Singup/>}/>
 
  </Routes>
  </Layout>
  </Router>
    </>
  )
}

export default App
