import React from "react";
import "./../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Menu";
import etusivuKuva from "./../pictures/etusivuKuva.png";

const Home = () => {
    return (
        <div className="bg">
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <Menu/>

                    <div>
                        <img src={etusivuKuva} className="home-picture"></img>
                    </div>
                </div>
            </div>
          <Footer/>
        </div>
    )
}

export default Home;