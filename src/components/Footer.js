import React from "react";
import "./../App.css";
import github from "./../icons/GitHub-Mark-Light-32px.png";
import email from "./../icons/email-32.png";

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

                    <div className="offset-2 row">
                        <a href="https://github.com/ohuji">
                            <img src={github}></img>
                        </a>

                        <p className="footer-paragraph"> 
                            Ohuji
                        </p>
                    </div>

                    <div className="offset-1 row">
                      
                       <img src={email}></img>

                        <p className="footer-paragraph"> 
                            juhsalomaki@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;