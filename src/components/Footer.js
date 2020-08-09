import React from "react";
import "./../App.css";
import github from "./../icons/GitHub-Mark-Light-32px.png";
import logo from "./../pictures/logoo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row siteFooter">

                    <div className="offset-3">
                        <h5 className="footer-header">
                            Tienaa rahaa meidän kanssa
                        </h5>
                      
                        <p className="footer-paragraph mb-0">
                            <Link to="/careers" className="footer-link">
                                Työpaikat
                            </Link>
                        </p>

                        <p className="footer-paragraph mb-0 ml-1">
                            <Link to="/login" className="footer-link">
                                Myy tuote
                            </Link>
                        </p>

                        <p className="footer-paragraph ml-3">
                            <Link to="/register" className="footer-link">
                                Rekisteröidy
                            </Link>
                        </p>
                    </div>

                    <div className="offset-3">
                        <h5 className="footer-header ml-5">
                            Ota yhteyttä ylläpitoon
                        </h5>
                        
                        <p className="footer-paragraph mb-0 mr-5">
                            Juho Salomäki &nbsp;&nbsp;
                        </p>

                        <p className="footer-paragraph mb-0 mr-5">
                            358452021944 &nbsp;&nbsp;
                        </p>

                        <p className="footer-paragraph mb-1 ml-3"> 
                           juhsalomaki@gmail.com &nbsp;
                       </p>

                       <a href="https://github.com/ohuji" className="footer-link mr-5">
                            <img src={github} className="footer-icon"></img> &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                    </div>         
                </div>
                <div className="row site-footer-second">
                    <div className="offset-4">
                        <img src={logo} className="mt-3 mb-3"></img>
                    </div>

                    <div className="offset-1">
                      <p className="copyright-text">
                        Copyright © 2020, Juho Salomäki, All Rights Reserved
                      </p>
                  </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;