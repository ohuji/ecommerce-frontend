import React from "react";
import Cookies from "universal-cookie";
import "./../App.css";
import Navbar from "./Navbar";
import Loggedinnavbar from "./Loggedinnavbar";
import Footer from "./Footer";

const cookies = new Cookies()

const Audioproduct = (props) => {
    return (
        <div className="bg">
            <Navbar/>

                <div>

                </div>
            <Footer/>
        </div>
    )
}

export default Audioproduct;