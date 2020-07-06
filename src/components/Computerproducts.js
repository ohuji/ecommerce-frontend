import React, { Component } from "react";
import "./../App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Menu from "./Menu";
import { Link } from "react-router-dom";

class Computerproducts extends Component {
    
    state = {
        computers: []
    }

    componentDidMount = () => {
        this.getComputers();
    }

    getComputers = () => {
        fetch("http://localhost:5000/ecommerce/computers", {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(response => {
           return response.json();
        })
        .then(data => {
            this.setState({ computers: data });
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { computers } = this.state;

        const computerList = computers.map((computer) =>
        <div className="card product-card" key={computer.ProductID}>
            <Link to={"/"+computer.ProductName} className="productLink">
                
                     <div className="card-body">
                            <p className="product-name">
                                {computer.ProductName}
                            </p>
                            <p className="product-price">
                                {computer.Price+"€"}
                            </p>
                    </div>
                
              
             </Link>
         </div>
        );

        return(
            <div className="bg">
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <Menu/>
                        
                        {computerList}         
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Computerproducts;