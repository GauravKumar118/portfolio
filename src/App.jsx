import { Route, Routes } from 'react-router-dom';
import Hero from "./sections/Hero"



import About from "./sections/About";
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<Hero />} />
        <Route path='/About' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>


    </>

  )
}

export default App;