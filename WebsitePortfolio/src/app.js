import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Workshops from "./Components/Workshops";
import Header from './header'; 
import Footer from './footer'; 


class App extends Component {
  render() {
    return (
    <BrowserRouter>
         <Header/>
          <div>
            <Route path="/" exact component={Home}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/workshops" exact component={Workshops}/>
            <Route path="/contact" exact component={Contact}/>
           <Footer/>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;