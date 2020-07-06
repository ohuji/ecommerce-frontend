import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Audioproducts from "./components/Audioproducts";
import Computerproducts from "./components/Computerproducts";
import Userlogin from "./components/Userlogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/audio" component={Audioproducts}/>
        <Route path="/computers" component={Computerproducts}/>
        <Route path="/login" component={Userlogin}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
