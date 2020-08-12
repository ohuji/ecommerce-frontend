import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import "./../App.css";
import Navbar from "./Navbar";
import Loggedinnavbar from "./Loggedinnavbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Menu from "./Menu";
import cart from "./../icons/cart-59-24.png";

const cookies = new Cookies()

const Audioproduct = () => {
    const cookieExists = cookies.get("Username") && cookies.get("Password");

    let [audioProducts, setAudioProducts] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:5000/ecommerce/audio")
        .then(response => {
            setAudioProducts(response.data);
        })
        }, []);

        const id = useParams().id;

        const product = audioProducts.filter(audioProduct => audioProduct.ProductID === Number(id)).map(filteredProduct => (
            <div key={filteredProduct.ProductID}>
                <div className="row">
                    <h1 className="mt-3 product-page-title">
                        {filteredProduct.ProductName}
                    </h1>

                    <div>
                        <p className="product-page-price-title">
                            Hinta (Sisältää 24% Alv):
                        </p>

                        <h1 className="product-page-price">
                            {filteredProduct.Price+" €"}
                        </h1>
                    </div>

                    <div className="product-page-manufacturer-div">
                        <h5 className="product-page-manufacturer-title">
                            Tuotteen valmistaja: {filteredProduct.Manufacturer}
                        </h5>
                    </div>

                    <div className="product-page-description-div">
                        <h5 className="product-page-description-title">
                        &nbsp;&nbsp; Lisätietoa tuotteesta &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </h5>

                        <p className="product-page-description">
                            {filteredProduct.Description}
                        </p>
                    </div>

                    <div className="product-page-paragraph-div">
                        <p className="product-page-paragraph">
                            Ilmainen toimitus kaikille yli 100€ maksaville
                        </p>

                        <p className="product-page-paragraph">
                            tuotteille, muuten toimituskulut 5.00€
                        </p>
                    </div>
                </div>
            </div>
        ));

        if(!cookieExists) {
        return (
            <div className="bg">
                <Navbar/>
                    <div className="container-fluid">
                        <div className="row">
                            <Menu/>

                            <div className="product-page-card">
                                {product}

                                <button className="product-page-button btn">
                                    Lisää ostoskoriin
                                    <img src={cart} className="ml-3 mb-1"></img>
                                </button>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }  else if(cookieExists) {
        return (
            <div className="bg">
                <Loggedinnavbar/>
                    <div className="container-fluid">
                        <div className="row">
                            <Menu/>

                            <div className="product-page-card">
                                
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default Audioproduct;