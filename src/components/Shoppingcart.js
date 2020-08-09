import React from "react";
import Loggedinnavbar from "./Loggedinnavbar";
import "./../App.css";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Footer from "./Footer";
import Amex from "./../icons/amex.png";
import Visa from "./../icons/visa.png";
import MC from "./../icons/mc.png";
import Paypal from "./../icons/paypal.png";
import Skrill from "./../icons/skrill.png";

const cookies = new Cookies()

const Shoppingcart = () => {
    return (
        <div className="bg">
            <Loggedinnavbar/>
                <div className="container-fluid">
                    <div className="cart-bg">
                        <div className="row">
                            <div className="cart-card">
                                <h2 className="cart-header mt-3">
                                    Ostoskori
                                </h2>
                            </div>

                            <div className="cart-amount-card">
                                <h2 className="cart-amount-header mt-3">
                                    Kokonaissumma
                                </h2>

                                <div className="row">
                                    <p className="mt-4 cart-amount-paragraph">
                                        Välisumma
                                    </p>

                                    <p>

                                    </p>
                                </div>

                                <div className="row line">
                                    <p className="mt-2 cart-amount-paragraph">
                                        Toimituskulut
                                    </p>

                                    <p className="cart-price mt-2">
                                        Ilmainen
                                    </p>
                                </div>

                                <Link to="/payment">
                                    <button type="button" className="btn mt-3 cart-button">
                                        Kassalle
                                    </button>
                                </Link>
                            </div>

                            <div className="cart-paymentmethods">
                                <h2 className="cart-header mt-3 ml-4">
                                    Hyväksymme
                                </h2>
                                
                                <div className="row">
                                    <img className="ml-5 mt-3" src={Amex}></img>

                                    <img className="mt-3 ml-3" src={Visa}></img>

                                    <img className="mt-3 ml-3" src={MC}></img>

                                    <img className="mt-3 ml-3" src={Paypal}></img>

                                    <img className="mt-3 ml-3" src={Skrill}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )

}

export default Shoppingcart;