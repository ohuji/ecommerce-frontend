import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import "./../App.css";
import Navbar from "./Navbar";
import Loggedinnavbar from "./Loggedinnavbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import Axios from "axios";

const cookies = new Cookies()

const Audioproduct = () => {

    let [audioProducts, setAudioProducts] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:5000/ecommerce/audio")
        .then(response => {
            setAudioProducts(response.data);
        })
        }, []);

        const id = useParams().id;

        const product = audioProducts.find(audioProduct => audioProduct.ProductID === Number(id));
        console.log(product)
        
        return (
            <div className="bg">
                <Navbar/>
                    <div>
                        <h1></h1>
                    </div>
                <Footer/>
            </div>
        )
    }

export default Audioproduct;