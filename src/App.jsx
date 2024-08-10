
import Layout from "./Components/HalalDashBoard/Layout"
import Home from "./Components/Home/Home"
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'


function App() {
 

  return (
    <>
  <Router>
  <Routes>
  <Route path="/hlallaout" element={<Layout/>}/>
  <Route path="/" element={<Home/>}/>
  </Routes>
  </Router>
    </>
  )
}

export default App
