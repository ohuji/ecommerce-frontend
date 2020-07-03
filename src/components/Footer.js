import React from "react";
import "./../App.css";
import github from "./../icons/GitHub-Mark-Light-32px.png";

const Footer = () => {
    return (
        <footer className="siteFooter">
            <div className="container-fluid">
                <div className="row">

                    <div className="offset-3">
                        <p className="footer-paragraph">
                        Copyright © 2020, Juho Salomäki, All Rights Reserved
                        </p>
                    </div>

                    <div className="offset-2">
                        <a href="https://github.com/ohuji">
                            <img src={github}></img>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;