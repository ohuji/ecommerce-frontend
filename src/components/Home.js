import React from "react";
import "./../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Menu";
import etusivuKuva from "./../pictures/etusivuukuva.png";
import Cookies from "universal-cookie";
import Loggedinnavbar from "./Loggedinnavbar";

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

                           <h2 className="mt-4">
                              Suosittuja tuotteita:
                           </h2>
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

                     <h2 className="mt-4">
                        Suosittuja tuotteita:
                     </h2>
                </div>
             </div>
          </div>
         <Footer/>
       </div>
)
  }
}

export default Home;