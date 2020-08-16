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
import Delete from "./../icons/delete-16.png";

const cookies = new Cookies();

const Shoppingcart = () => {

    let [cookieList, setCookieList] = useState([]);

    useEffect(() => {
        let allCookies = cookies.getAll();
        const toArray = Object.entries(allCookies);
        setCookieList(toArray);
    }, []);

    const handleClick = (e) => {
        cookies.remove(`${filter[0][0]}`);

        alert("Tuote poistettu ostoskorista");
    }

    const filter = cookieList.filter(name => name[0][0] === "a");

    const shoppingList = filter.map(filteredProduct => (
        <ul className="list-group cart-list" key={filteredProduct[1].productFilter[0].Description}>
            <li className="list-group-item">
                <div className="row">
                    <p className="cart-item-name">
                        {filteredProduct[1].productFilter[0].ProductName}
                    </p>

                    <p className="cart-item-price">
                        {filteredProduct[1].productFilter[0].Price+" €"}
                    </p>

                    <button type="button"
                     className="btn cart-delete"
                     onClick={handleClick}>
                            Poista tuote
                        <img className="delete-icon" src={Delete}></img>
                    </button>
                </div>
            </li>
        </ul>
    ));

    const sum = filter
    .map(filteredProduct => filteredProduct[1].productFilter[0].Price)
    .reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);

    const shipment = () => {
       if (sum > 100) {
           return 0;
       } else if(sum < 100) {
           return 5;
       }
   }

   const total = () => {
       if (sum > 100) {
           return sum;
       } else if (sum < 100) {
           return sum + 5;
       }
   }
        
    
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

                                {shoppingList}
                            </div>

                            <div className="cart-amount-card">
                                <h2 className="cart-amount-header mt-3">
                                    Kokonaissumma
                                </h2>

                                <div className="row">
                                    <p className="mt-4 cart-amount-paragraph">
                                        Välisumma (sis. 24% alv)
                                    </p>

                                    <p className="cart-amount-subtotal">
                                        {sum}.00 €
                                    </p>
                                </div>

                                <div className="row">
                                    <p className="mt-2 cart-amount-paragraph">
                                        Toimituskulut
                                    </p>

                                    <p className="cart-price mt-2">
                                        {shipment()}.00 €
                                    </p>
                                </div>

                                <div className="row line">
                                    <p className="mt-2 cart-amount-paragraph">
                                        Kokonaissumma
                                    </p>

                                    <p className="cart-price mt-2">
                                        {total()}.00 €
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