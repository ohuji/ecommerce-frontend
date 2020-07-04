import React from "react";
import "./../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Menu";

const Home = () => {
    return (
        <div className="bg">
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <Menu/>
                </div>
            </div>
          <Footer/>
        </div>
    )
}

export default Home;