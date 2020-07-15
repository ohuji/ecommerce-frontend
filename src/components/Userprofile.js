import React, { Component } from "react";
import "./../App.css";
import Loggedinnavbar from "./Loggedinnavbar";
import Footer from "./Footer";
import Axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Userprofile extends Component {

    state = {
        User: [],
        Username: "",
        Password: "",
        Email: "",
        Firstname: "",
        Lastname: ""
    }

    componentDidMount = () => {
        this.getUser();
    }

    getUser = () => {
        const userID = cookies.get("UserID");
        const parsed = JSON.stringify(userID);
        const url = "http://localhost:5000/ecommerce/users/" + parsed;

        Axios.get(url)
        .then(response => {
            this.setState({ User: response });
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleSubmit = () => {
        const userID = cookies.get("UserID");
        const url = "http://localhost:5000/ecommerce/users/" + userID;

        Axios.put(url, this.state) 
        .then(response => {
            alert("Muokkaus onnistui!")
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { User, Username, Password, Email, Firstname, Lastname } = this.state;
        return (
            <div className="bg">
                <Loggedinnavbar/>
                    <div className="container-fluid">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h5>Käyttäjänimi: {User.Username}</h5>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>
                                            Muokkaa tai vaihda käyttäjänimi
                                        </label>

                                        <input className="form-control"
                                        id="Username"
                                        value={Username}
                                        onChange={this.handleChange}
                                        required/>

                                        <button className="btn" type="submit">
                                            Tallenna muokkaus
                                        </button>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default Userprofile;