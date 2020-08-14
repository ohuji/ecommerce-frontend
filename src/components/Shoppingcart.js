import React, {useState, useEffect} from "react";
import Loggedinnavbar from "./Loggedinnavbar";
import "./../App.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Amex from "./../icons/amex.png";
import Visa from "./../icons/visa.png";
import MC from "./../icons/mc.png";
import Paypal from "./../icons/paypal.png";
import Skrill from "./../icons/skrill.png";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Shoppingcart = () => {

    let [cookieList, setCookieList] = useState([]);

    useEffect(() => {
        let allCookies = cookies.getAll();
        const toArray = Object.entries(allCookies);
        setCookieList(toArray);
    }, []);

    let filter = cookieList.filter(name => name[0][0] === "a");
    console.log(filter)

    const asd = filter.map(filteredMap => (
        <ul className="list-group shoppingcart-list" key={filteredMap[1].productFilter[0].ProductName}>
            <li className="list-group-item">
            <div className="row">
                    <p className="shoppingcart-paragraph">
                        {filteredMap[1].productFilter[0].ProductName}
                    </p>
                    <p className="shoppingcart-price">
                        {filteredMap[1].productFilter[0].Price}
                    </p>
                </div>
            </li>
        </ul>

    ));

    console.log(filter);


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

                                <div>
                                    {asd}
                                </div>
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