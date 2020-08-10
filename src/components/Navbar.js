import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import login from "./../icons/account-login-24.png";
import shoppingCart from "./../icons/cart-59-24.png";
import logo2 from "./../pictures/logoo2.png";
import gear from "./../icons/gear-24.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand offset-1">
                <Link to="/" className="navlink">
                    <img src={logo2}></img>
                </Link>
            </div>

            <ul className="nav">
                <li className="nav-item">
                    <Link to="/login" className="navlink">
                        <img src={login} className="navbaricon"></img>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link to="/login" className="navlink">
                        <img src={shoppingCart} className="navbaricon"></img>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/login" className="navlink">
                        <img src={gear} className="navbaricon"></img>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;