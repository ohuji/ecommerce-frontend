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
        <div className="card product-card" key={audioProduct.ProductID}>
            <Link to={"/"+audioProduct.ProductName} className="productLink">
                
                     <div className="card-body">
                            <p className="product-name">
                                {audioProduct.ProductName}
                            </p>
                            <p className="product-price">
                                {audioProduct.Price+"€"}
                            </p>
                    </div>
                
              
             </Link>
         </div>
        );

        return(
            <div className="bg">
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <Menu/>
                        
                        {audioProductList}         
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Audioproducts;