import React, { Component } from "react";
import "./../App.css";
import Loggedinnavbar from "./Loggedinnavbar";
import Footer from "./Footer";
import Axios from "axios";

class Sellaudio extends Component {

    state = {
        ProductName: "",
        Manufacturer: "",
        Price: "",
        Description: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        Axios.post("http://localhost:5000/ecommerce/audio/1", this.state)
        .then(response => {
            console.log(response);
            alert("Tuote lisätty kohteeseen audio- ja hifi onnistuneesti!")
        })
        .catch(error => {
            console.log(error);
            alert("Jokin meni pieleen yritä uudelleen!")
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="bg">
                <Loggedinnavbar/>
                    <div className="container-fluid">
                        <div className="card infoCard">
                            <div className="card-body">
                                <h2 className="card-title">
                                    Aseta tuotteen tiedot
                                </h2>

                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label mt-3">
                                            Tuotteen nimi
                                        </label>

                                        <input 
                                        className="form-control"
                                        name="ProductName"
                                        value={this.state.ProductName}
                                        onChange={this.handleChange}
                                        required>
                                        </input>

                                        <label className="form-label mt-3">
                                            Valmistajan nimi
                                         </label>

                                        <input 
                                        className="form-control"
                                        name="Manufacturer"
                                        value={this.state.Manufacturer}
                                        onChange={this.handleChange}
                                        required>
                                        </input>

                                        <label className="form-label mt-3">
                                            Tuotteen hinta
                                         </label>

                                        <input 
                                        className="form-control"
                                        name="Price"
                                        value={this.state.Price}
                                        onChange={this.handleChange}
                                        required>
                                        </input>

                                        <label className="form-label mt-3">
                                            Kuva tuotteesta
                                         </label>

                                        <input 
                                        className="form-control-file"
                                        type="file"
                                        name="Image"
                                        onChange={this.handleChange}
                                        required>
                                        </input>

                                        <label className="form-label mt-3">
                                            Kuvaus tuotteesta
                                         </label>

                                        <textarea 
                                        className="form-control"
                                        name="Description"
                                        value={this.state.Description}
                                        onChange={this.handleChange}
                                        rows="5"
                                        required>
                                        </textarea>
                                    </div>

                                    <button type="submit" className="btn form-button mt-3 mb-3">
                                        Lähetä tiedot
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

export default Sellaudio;