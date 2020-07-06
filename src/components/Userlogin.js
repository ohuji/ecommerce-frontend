import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./../App.css";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Axios from "axios";

const cookies = new Cookies();

class Userlogin extends Component {
    
        state = {
            Username: "",
            Password: ""
        }       

    handleSubmit = (e) => {
        e.preventDefault()

        Axios.post("http://localhost:5000/ecommerce/users", this.state, {withCredentials: true})
        .then(response => {
                cookies.set("User", response , { path: "/" });     
        })
        .catch(error => {
            alert("Kirjautuminen epäonnistui!")
            console.log(error);
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="bg">
                <Navbar/>
                <div className="container-fluid">
                    <div className="card loginCard">
                        <div className="card-body">
                        <h2 className="card-title">
                            Kirjaudu Sisään
                        </h2>

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                              <label className="form-label mt-3">
                                Käyttäjätunnus
                              </label>

                              <input 
                                className="form-control"
                                name="Username"
                                value={this.state.Username}
                                onChange={this.handleChange}>
                              </input>

                              <label className="form-label mt-3">
                                Salasana
                              </label>

                              <input 
                                className="form-control"
                                name="Password"
                                value={this.state.Password}
                                onChange={this.handleChange}>
                              </input>
                            </div>
                            
                            <button type="submit" className="btn form-button mt-3 mb-3">        
                                Kirjaudu         
                            </button>
                        </form>
                        </div>
                    </div>
                        <div className="card newUserCard">
                            <div className="card-body">

                                <p className="newUserCard-paragraph">
                                    Oletko uusi käyttäjä?
                                    <Link to="/register" className="ml-2">
                                        Luo uusi tili!
                                    </Link>
                                </p>
                                
                            </div>
                        </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Userlogin;