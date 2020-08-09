import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./../App.css";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Axios from "axios";
import logo1 from "./../pictures/logo1.png"

const cookies = new Cookies();

class Userlogin extends Component {
    
        state = {
            User: [],
            Username: "",
            Password: ""
        }

    
    getUser = () => {
        const { Username, Password } = this.state;
        Axios.get("http://localhost:5000/ecommerce/users", {
            params: {
            Username: Username,
            Password: Password
        }
        })
        .then(response => {
            this.setState({ User: response });
            console.log(response);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getUser();
        const {Username, Password, User} = this.state;
        const userID = toString(User.UserID);

        Axios.post("http://localhost:5000/ecommerce/users", this.state, {withCredentials: true})
        .then(response => {
                console.log(response);
                cookies.set("Username", {Username} , { path: "/" });  
                cookies.set("Password", {Password} , { path: "/" });
                cookies.set("UserID", {userID} , { path: "/" });
                alert("Kirjauduttu onnistuneesti sisään!")   
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
                        <img src={logo1}></img>

                        <h2 className="card-title mt-3">
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
                                onChange={this.handleChange}
                                required>
                              </input>

                              <label className="form-label mt-3">
                                Salasana
                              </label>

                              <input 
                                className="form-control"
                                name="Password"
                                type="password"
                                value={this.state.Password}
                                onChange={this.handleChange}
                                required>
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