import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand offset-1">
                <Link to="/" className="navlink">
                    eCommerce
                </Link>
            </div>



        </nav>
    )
}

export default Navbar;