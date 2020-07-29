import React, { Component } from "react";
import "./../App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Menu from "./Menu";
import { Link } from "react-router-dom";

class Audioproducts extends Component {
    
    state = {
        audioProducts: []
    }

    componentDidMount = () => {
        this.getAudioProducts();
    }

    getAudioProducts = () => {
        fetch("http://localhost:5000/ecommerce/audio", {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(response => {
           return response.json();
        })
        .then(data => {
            this.setState({ audioProducts: data });
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { audioProducts } = this.state;

        const audioProductList = audioProducts.map((audioProduct) =>
        <ul className="list-group list-group-flush" key={audioProduct.ProductID}>
                <li className="list-group-item category-item">
                    
                        <p className="product-name">
                            {audioProduct.ProductName}
                        </p>

                        <p className="product-price">
                            {audioProduct.Price+"€"}
                        </p>

                        <Link to={"/"+audioProduct.ProductName} className="productLink"> 
                            <button className="btn read-more">
                                Lue lisää             
                            </button>
                        </Link>
                </li>
         </ul>
        );

        return(
            <div className="bg">
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <Menu/>     
                         
                        <div className="offset-2">

                            {audioProductList}  
                        </div>
                    </div> 
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Audioproducts;