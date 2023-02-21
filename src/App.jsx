import { useContext } from "react"
import Blog from "./Components/Blog"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Nav from "./Components/Nav"
import Project from "./Components/Project"
import ScrollToTop from "./Components/ScrollToTop"
import Services from "./Components/Services"
import Testimonials from "./Components/Testimonials"
import { ThemeContext } from "./Components/Toggle"



function App() {

  const theme = useContext(ThemeContext);
  const dark = theme.state.dark
  

  return (
    <div className={dark? 'font-Poppins bg-sky-900 text-white' : 'font-Poppins bg-ghostWhite'}>
      <Nav />
      <Home/>
      <Project />
      <Services />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
      
    </div>
  )
}

export default App
