import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import login from "./../icons/login-32.png";
import shoppingCart from "./../icons/shopping-cart-32.png";
import Cookies from "universal-cookie";
import profile from "./../icons/user-32.png";
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
                    <img src={login} className="navbaricon"></img>

                    <button className="nav-button-second" onClick={this.handleClick()}>
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
                    <img src={profile} className="navbaricon"></img>

                    <Link to="/profile" className="navlink">
                        Profiili
                    </Link>
                </li>
            </ul>
        </nav>
    )
    }
}

export default Loggedinnavbar;