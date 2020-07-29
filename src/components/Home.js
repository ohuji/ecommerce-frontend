import React from "react";
import "./../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Menu";
import etusivuKuva from "./../pictures/etusivuukuva.png";
import Cookies from "universal-cookie";
import Loggedinnavbar from "./Loggedinnavbar";
import { Link } from "react-router-dom";
import gb1kpe from "./../pictures/gb1kpe.png";

const cookies = new Cookies();

const Home = () => {
    const cookieExists = cookies.get("Username") && cookies.get("Password");

    if(!cookieExists) {
        return (
             <div className="bg">
               <Navbar/>
                  <div className="container-fluid">
                     <div className="row">
                        <Menu/>

                     <div>
                        <img src={etusivuKuva} className="home-picture"></img>

                        <div>
                           <h2 className="mt-4 display-4">
                              Näyteikkuna:
                           </h2>

                           
                           <div className="card product-card">
                              <Link to="/YamahaGB1KPEmustaflyygeli" className="home-product-link">
                                 <div className="card-body">
                                    <p className="home-product-name">
                                       Yamaha GB1KPE musta flyygeli 
                                    </p>
                                    <img src={gb1kpe}></img>
                                    <p className="home-product-price">
                                       9000€
                                    </p>
                                 </div>
                              </Link>
                           </div>
                  
                        </div>
                     </div>
                  </div>
               </div>
              <Footer/>
            </div>
    )
  } else if(cookieExists) {
    return (
        <div className="bg">
          <Loggedinnavbar/>
             <div className="container-fluid">
                <div className="row">
                   <Menu/>

                <div>
                  <img src={etusivuKuva} className="home-picture"></img>

                  <div>
                     <h2 className="mt-4 display-4">
                        Näyteikkuna:
                     </h2>

                     <div className="card product-card">
                        <Link to="/YamahaGB1KPEmustaflyygeli" className="home-product-link">
                           <div className="card-body">
                              <p className="home-product-name">
                                 Yamaha GB1KPE musta flyygeli 
                              </p>
                              <img src={gb1kpe}></img>
                              <p className="home-product-price">
                                 9000€
                              </p>
                           </div>
                        </Link>
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

export default Home;