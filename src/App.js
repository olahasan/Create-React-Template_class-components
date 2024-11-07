import React , {Component} from "react";
// import './App.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Index from './components/Index/Index'



class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Index/>}/>
          <Route  path="/Contact" element={<Contact/>}/>
        </Routes>
     
      </BrowserRouter>
    )
  }
}


export default App;
