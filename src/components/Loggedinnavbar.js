import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import login from "./../icons/account-login-24.png";
import shoppingCart from "./../icons/cart-59-24.png";
import Cookies from "universal-cookie";
import profile from "./../icons/gear-24.png";
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
                    <Link to="/category" className="navlink">
                        <button className="btn nav-button btn-outline-light">      
                            Myy tuote 
                        </button>
                    </Link>
                </li>

                <li className="nav-item">
                    <button className="nav-button-second" onClick={this.handleClick()}>
                        <Link to="/" className="navlink">
                            <img src={login} className="navbaricon"></img>
                        </Link>
                    </button>
                </li>

                <li className="nav-item">
                    <Link to="/shoppingcart" className="navlink">
                        <img src={shoppingCart} className="navbaricon"></img>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/profile" className="navlink">
                        <img src={profile} className="navbaricon"></img>
                    </Link>
                </li>
            </ul>
        </nav>
    )
    }
}

export default Loggedinnavbar;