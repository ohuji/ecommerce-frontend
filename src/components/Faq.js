import React from "react";
import "./../App.css";
import Navbar from "./Navbar";
import Loggedinnavbar from "./Loggedinnavbar";
import Footer from "./Footer";
import Menu from "./Menu";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Faq = () => {
    const cookieExists = cookies.get("Username") && cookies.get("Password");

    if (cookieExists) {
        return (
            <div className="bg">
                <Loggedinnavbar/>
                    <div className="container-fluid">
                        <div className="row">
                            <Menu/>

                            <div className="offset-3">
                                <h2 className="mt-5 display-4 mb-5">
                                    Usein kysytyt kysymykset
                                </h2>

                                <div className="accordion" id="accordion">
                                    <div className="card question-card offset-0">
                                        <div className="card-header">
                                            <button className="btn question-button btn-block collapsed" data-toggle="collapse" data-target="#first-question">                      
                                               1. Onko verkkokauppa aito?
                                            </button>
                                        </div>

                                        <div className="collapse question-collapse" id="first-question" data-parent="#accordion">
                                            <div className="card-body">
                                                Kyseessä on demo eikä aito verkkokauppa, elikkä mitkään tuotteet eivät ole oikeasti olemassa tai saatavana.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion" id="accordion">
                                    <div className="card question-card offset-0">
                                        <div className="card-header">
                                            <button className="btn question-button btn-block collapsed" data-toggle="collapse" data-target="#second-question">                      
                                               2. Saako käyttämiä rahoja takaisin?
                                            </button>
                                        </div>

                                        <div className="collapse question-collapse" id="second-question" data-parent="#accordion">
                                            <div className="card-body">
                                                Kaikki mahdollinen raha mitä on käytetty oletetaan lahjoituksena, eikä sitä ole mahdollista saatavina takaisin. Olet tämän hyväksynyt ja ymmärtänyt luomalla käyttäjän.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion" id="accordion">
                                    <div className="card question-card offset-0">
                                        <div className="card-header">
                                            <button className="btn question-button btn-block collapsed" data-toggle="collapse" data-target="#third-question">                      
                                               3. Miten voin ottaa yhteyttä sivun ylläpitoon?
                                            </button>
                                        </div>

                                        <div className="collapse question-collapse" id="third-question" data-parent="#accordion">
                                            <div className="card-body">
                                               Sivun luojaan voi ottaa yhteyttä sähköpostilla. Sähköpostiosoite on: juhsalomaki@gmail.com
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
            </div>
        )
    } else if (!cookieExists) {
        return (
            <div className="bg">
                <Navbar/>
                    <div className="container-fluid">
                        <div className="row">
                            <Menu/>          
                            <div className="offset-3">
                                <h2 className="mt-5 display-4 mb-5">
                                    Usein kysytyt kysymykset
                                </h2>

                                <div className="accordion" id="accordion">
                                    <div className="card question-card offset-0">
                                        <div className="card-header">
                                            <button className="btn question-button btn-block collapsed" data-toggle="collapse" data-target="#first-question">                      
                                               1. Onko verkkokauppa aito?
                                            </button>
                                        </div>

                                        <div className="collapse question-collapse" id="first-question" data-parent="#accordion">
                                            <div className="card-body">
                                                Kyseessä on demo eikä aito verkkokauppa, elikkä mitkään tuotteet eivät ole oikeasti olemassa tai saatavana.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion" id="accordion">
                                    <div className="card question-card offset-0">
                                        <div className="card-header">
                                            <button className="btn question-button btn-block collapsed" data-toggle="collapse" data-target="#second-question">                      
                                               2. Saako käyttämiä rahoja takaisin?
                                            </button>
                                        </div>

                                        <div className="collapse question-collapse" id="second-question" data-parent="#accordion">
                                            <div className="card-body">
                                                Kaikki mahdollinen raha mitä on käytetty oletetaan lahjoituksena, eikä sitä ole mahdollista saatavina takaisin. Olet tämän hyväksynyt ja ymmärtänyt luomalla käyttäjän.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion" id="accordion">
                                    <div className="card question-card offset-0">
                                        <div className="card-header">
                                            <button className="btn question-button btn-block collapsed" data-toggle="collapse" data-target="#third-question">                      
                                               3. Miten voin ottaa yhteyttä sivun ylläpitoon?
                                            </button>
                                        </div>

                                        <div className="collapse question-collapse" id="third-question" data-parent="#accordion">
                                            <div className="card-body">
                                               Sivun luojaan voi ottaa yhteyttä sähköpostilla. Sähköpostiosoite on: juhsalomaki@gmail.com
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default Faq;