import React from "react";
import "./../App.css";
import Loggedinnavbar from "./Loggedinnavbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Choosecategory = () => {
    return (
        <div className="bg">
            <Loggedinnavbar/>
                <div className="container-fluid">
                    <h2 className="mt-5 mb-4">
                        Valitse Tuotteellesi Kategoria
                    </h2>

                
                    <div className="card categoryCard mb-3">
                    <Link to="sellaudio" className="categoryLink">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>
                                    Audio- ja hifi
                                </h5>
                            </div>

                            <p className="categoryCard-paragraph">
                                Kuulokkeet, kaiuttimet, vahvistimet, kaapelit, cd-soittimet ja kaikki asiaan kuuluvat setit.
                            </p>
                        </div>
                    </Link>
                    </div>
                

                    <div className="card categoryCard mb-3">
                    <Link to="sellcomputers" className="categoryLink">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>
                                    Tietokoneet
                                </h5>
                            </div>

                            <p className="categoryCard-paragraph">
                                Pöytätietokoneet, kannettavat, tietokonelaukut ja muut oheislaitteet
                            </p>
                        </div>
                    </Link>
                    </div>

                    <div className="card categoryCard mb-3">
                    <Link to="sellphones" className="categoryLink">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>
                                    Puhelimet
                                </h5>
                            </div>

                            <p className="categoryCard-paragraph">
                                Kaikenlaiset puhelimet
                            </p>
                        </div>
                    </Link>
                    </div>

                    <div className="card categoryCard mb-3">
                    <Link to="selltelevisions" className="categoryLink">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>
                                    Televisiot
                                </h5>
                            </div>

                            <p className="categoryCard-paragraph">
                                Televisiot, telineet, antennit, kaukosäätimet, kaapelit ja muut lisäosat
                            </p>
                        </div>
                    </Link>
                    </div>

                    <div className="card categoryCard mb-3">
                    <Link to="sellvideogames" className="categoryLink">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>
                                    Videopelit
                                </h5>
                            </div>

                            <p className="categoryCard-paragraph">
                                Kaikki PC ja konsoli pelit
                            </p>
                        </div>
                    </Link>
                    </div>

                    <div className="card categoryCard mb-3">
                    <Link to="sellcomponents" className="categoryLink">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>
                                    Komponentit
                                </h5>
                            </div>

                            <p className="categoryCard-paragraph">
                                Tietokoneen prosessorit, muistit, virtalähteet, kaapelit, emolevyt, näytönohjaimet, kovalevyt ja ssd:t, kopat ja tuulettimet
                            </p>
                        </div>
                    </Link>
                    </div>

                    <div className="card categoryCard mb-3">
                    <Link to="sellcameras" className="categoryLink">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>
                                    Kamerat
                                </h5>
                            </div>

                            <p className="categoryCard-paragraph">
                                Järjestelmäkamerat, action-kamerat, kameralaukut, jalustat, muistikortit, digikamerat, muut kamerat ja lisäosat
                            </p>
                        </div>
                    </Link>
                    </div>

                    <div className="card categoryCard mb-3">
                    <Link to="sellmusic" className="categoryLink">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>
                                    Musiikki
                                </h5>
                            </div>

                            <p className="categoryCard-paragraph">
                                Soittimet, DJ-setit, mikit, musiikinteko ohjelmistot, studiolaitteet, äänikortit ja muut musiikkiin liittyvät asiat
                            </p>
                        </div>
                    </Link>
                    </div>

                    <div className="card categoryCard mb-3">
                    <Link to="sellfurniture" className="categoryLink">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>
                                    Huonekalut
                                </h5>
                            </div>

                            <p className="categoryCard-paragraph">
                                Sohvat, sängyt, kaapit, lipastot, sisustus ja lamput
                            </p>
                        </div>
                    </Link>
                    </div>

                    <div className="card categoryCard mb-3">
                    <Link to="sellbooks" className="categoryLink">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>
                                    Kirjat
                                </h5>
                            </div>

                            <p className="categoryCard-paragraph">
                                Kaikki erilaiset kirjat
                            </p>
                        </div>
                    </Link>
                    </div>

                    <div className="card categoryCard mb-3">
                    <Link to="selloffice" className="categoryLink">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>
                                    Toimistotarvikkeet
                                </h5>
                            </div>

                            <p className="categoryCard-paragraph">
                                Nitojat, vihkot, laput, laskimet, kynät, teipit, liimat, silppurit, tulostimet, paristot ja muut toimistotarvikkeet
                            </p>
                        </div>
                    </Link>
                    </div>

                    <div className="card categoryCard mb-3">
                    <Link to="sellsports&outdoors" className="categoryLink">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>
                                    Urheilu ja ulkoilu
                                </h5>
                            </div>

                            <p className="categoryCard-paragraph">
                                Urheiluvarusteet, kamppailuvarusteet, pyörät, kuntosalitarvikkeet ja muut urheilu tai ulkoilu tavarat
                            </p>
                        </div>
                    </Link>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Choosecategory;