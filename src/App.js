import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Audioproducts from "./components/Audioproducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/audio" component={Audioproducts}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
