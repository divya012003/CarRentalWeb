import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Blog from "./Blog";
import Footer from "./Footer";
//import PageNotFound from "./PageNotFound"



export default class App extends React.Component{

  // constructor(){
  //   super()
  // }

  render(){
    return(
      <>
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>

        <Footer/>
      </Router>
      
      
      </>
    )
  }
}