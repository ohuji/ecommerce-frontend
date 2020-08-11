import React, { Component } from "react";
import "./../App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import headphones from "./../icons/headphones-3-48.png";

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

                        <Link to={`/audio/${audioProduct.ProductID}`} className="productLink"> 
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

                        <div>
                            <div className="category-info-card mt-5 mb-5 offset-2">
                                <div className="row">
                                    <h1 className="offset-4 mr-3 mb-3">
                                            Audio- ja hifi
                                    </h1>

                                    <img src={headphones} className="icon"></img>
                                </div>
                                <p className="category-info-paragraph">
                                    Kodin viihde herää henkiin kunnollisella äänentoistolla. Ecommercesta löydät laajan valikoiman äänentoistovälineitä jokaiseen tilanteeseen ja tilaan. Meiltä saat kotiin valmiit kotiteatteripaketit, stereopaketit, vahvistimet ja kaiuttimet sekä tietysti asianmukaiset tarvikkeet kuten kaapelit, kiinnikkeet ja jalustat. Liikkuvalle ihmiselle tarjoamme laajan valikoiman kuulokkeita, MP3-soittimia ja Bluetooth-kaiuttimia ja levyjen kuuntelijoille CD-soittimet ja vinyylisoittimet. Osta äänentoistolaitteet kätevästi netistä – todennäköisesti aina halvemmalla!
                                </p>
                            </div>

                            <div className="offset-3">
                                {audioProductList}  
                            </div>
                        </div>     
                         
                    </div> 
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Audioproducts;