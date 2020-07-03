import React from "react";
import "./../App.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import headphone from "./../icons/headphones-3-16.png";
import computer from "./../icons/computer-16.png";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="bg">
            <Navbar/>
        <div className="container-fluid">
        <div className="row">
            <div className="menu">
                <Link to="/audio" className="menulink">
                    <img src={headphone} className="menuicon"></img>
                    Audio- ja hifi
                </Link>
                <Link to="/computers" className="menulink">
                    <img src={computer} className="menuicon"></img>
                    Tietokoneet
                </Link>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Home;