import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Audioproducts from "./components/Audioproducts";
import Computerproducts from "./components/Computerproducts";
import Userlogin from "./components/Userlogin";
import Userregister from "./components/Userregister";
import Choosecategory from './components/Choosecategory';
import Sellaudio from './components/Sellaudio';
import Userprofile from './components/Userprofile';
import Faq from './components/Faq';
import Shoppingcart from "./components/Shoppingcart";
import Audioproduct from './components/Audioproduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/audio/:id" component={Audioproduct}/>
        <Route path="/audio" component={Audioproducts}/>
        <Route path="/computers" component={Computerproducts}/>
        <Route path="/login" component={Userlogin}/>
        <Route path="/register" component={Userregister}/>
        <Route path="/category" component={Choosecategory}/>
        <Route path="/sellaudio" component={Sellaudio}/>
        <Route path="/profile" component={Userprofile}/>
        <Route path="/faq" component={Faq}/>
        <Route path="/shoppingcart" component={Shoppingcart}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
