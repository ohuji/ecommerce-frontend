import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import login from "./../icons/login-32.png";
import shoppingCart from "./../icons/shopping-cart-32.png";
import Cookies from "universal-cookie";
import gear from "./../icons/gear-32.png";
import logo2 from "./../pictures/logoo2.png";

const cookies = new Cookies()

class Loggedinnavbar extends Component {

    handleClick = (e) => {
        cookies.remove("Username", { path: "/" });
        cookies.remove("Password", { path: "/" });
    }

    render() {
    return (
        <nav className="navbar">
            <div className="navbar-brand offset-1">
                <Link to="/" className="navlink">
                    <img src={logo2}></img>
                </Link>
            </div>

            <ul className="nav">
                <li className="nav-item">
                    <button className="btn btn-outline-light">
                        <Link to="/category" className="navlink">
                            Myy tuote
                         </Link>
                    </button>
                </li>

                <li className="nav-item">
                    <img src={login} className="navbaricon"></img>
                    <button className="nav-button" onClick={this.handleClick()}>
                    <Link to="/" className="navlink">
                        Kirjaudu Ulos
                    </Link>
                    </button>
                </li>

                <li className="nav-item">
                    <img src={shoppingCart} className="navbaricon"></img>

                    <Link to="/shoppingcart" className="navlink">
                        Ostoskori
                    </Link>
                </li>

                <li className="nav-item">
                    <img src={gear} className="navbaricon"></img>

                    <Link to="/settings" className="navlink">
                        Asetukset
                    </Link>
                </li>
            </ul>
        </nav>
    )
    }
}

export default Loggedinnavbar;