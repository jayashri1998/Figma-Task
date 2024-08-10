
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Service from "./Components/OurService/Service"


function App() {
 

  return (
    <>
  <Router>
  <Layout>
  
  <Routes>
 <Route path="/" element={<Home/>}/>
  <Route path="/ourservices" element={<Service/>}/>
 
  </Routes>
  </Layout>
  </Router>
    </>
  )
}

export default App
