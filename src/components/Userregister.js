import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./../App.css";
import Axios from "axios";
import logo1 from "./../pictures/logo1.png";


class Userregister extends Component {
    
        state = {
            Username: "",
            Password: "",
            Email: "",
            Firstname: "",
            Lastname: ""
        }       

    handleSubmit = (e) => {
        e.preventDefault()

        Axios.post("http://localhost:5000/ecommerce/users/1", this.state, {withCredentials: true})
        .then(response => { 
                console.log(response);
                alert("Rekisteröinti onnistui, ole hyvä ja kirjaudu sisään!") 
        })
        .catch(error => {
            alert("Rekisteröinti epäonnistui, yritä uudelleen!")
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
                    <div className="card registerCard">
                        <div className="card-body">
                        <img src={logo1}></img>
                        <h2 className="card-title mt-3">
                            Rekisteröidy
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
                                onChange={this.handleChange} required/>                              

                              <label className="form-label mt-3">
                                Salasana
                              </label>

                              <input 
                                className="form-control"
                                type="password"
                                name="Password"
                                value={this.state.Password}
                                onChange={this.handleChange} required/>

                             <label className="form-label mt-3">
                                Sähköposti
                              </label>

                              <input 
                                className="form-control"
                                name="Email"
                                type="email"
                                value={this.state.Email}
                                onChange={this.handleChange} required/>  

                             <label className="form-label mt-3">
                                Etunimi
                              </label>

                              <input 
                                className="form-control"
                                name="Firstname"
                                value={this.state.Firstname}
                                onChange={this.handleChange} required/>

                              <label className="form-label mt-3">
                                Sukunimi
                              </label>

                              <input 
                                className="form-control"
                                name="Lastname"
                                value={this.state.Lastname}
                                onChange={this.handleChange} required/>

                            </div>     

                            <button type="submit" className="btn form-button mt-3 mb-3">        
                                Luo tili         
                            </button>
                        </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Userregister;