import Navbar from './components/navbar/Navbar'
import Contact from "./components/contact/contact"
import Home from "./components/home/home"
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'
import React from 'react'
import "./app.css"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="section">
      <Home/>
      <Projects/>
      <Contact/>
      <Footer/>

      </div>
     
    </div>
  );
}

export default App;
