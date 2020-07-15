import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import login from "./../icons/login-32.png";
import shoppingCart from "./../icons/shopping-cart-32.png";
import logo2 from "./../pictures/logoo2.png";

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
                    <button className="btn btn-outline-light">
                        <Link to="/login" className="navlink">
                            Myy tuote
                         </Link>
                    </button>
                </li>

                <li className="nav-item">
                    <img src={login} className="navbaricon"></img>

                    <Link to="/login" className="navlink">
                        Kirjaudu
                    </Link>
                </li>

                <li className="nav-item">
                    <img src={shoppingCart} className="navbaricon"></img>

                    <Link to="/login" className="navlink">
                        Ostoskori
                    </Link>
                </li>
            </ul>


        </nav>
    )
}

export default Navbar;