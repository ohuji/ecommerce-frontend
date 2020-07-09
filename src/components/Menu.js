import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import headphone from "./../icons/headphones-3-16.png";
import computer from "./../icons/computer-16.png";
import phone from "./../icons/mobile-phone-8-16.png";
import tv from "./../icons/widescreen-tv-16.png";
import game from "./../icons/joystick-16.png";
import cpu from "./../icons/cpu-16.png";
import camera from "./../icons/camera-5-16.png";
import music from "./../icons/note-16.png";
import furniture from "./../icons/sofa-16.png";
import book from "./../icons/book-16.png";
import paperclip from "./../icons/paperclip-16.png";
import sport from "./../icons/soccer-16.png";

const Menu = () => {
    return (
        <div className="menu mb-3">
        <Link to="/audio" className="menulink">
            <img src={headphone} className="menuicon"></img>
            Audio- & hifi
        </Link>
        <Link to="/computers" className="menulink">
            <img src={computer} className="menuicon"></img>
            Tietokoneet
        </Link>
        <Link to="/phones" className="menulink">
            <img src={phone} className="menuicon"></img>
            Puhelimet
        </Link>
        <Link to="/televisions" className="menulink">
            <img src={tv} className="menuicon"></img>
            Televisiot
        </Link>
        <Link to="/games" className="menulink">
            <img src={game} className="menuicon"></img>
            Videopelit
        </Link>
        <Link to="/components" className="menulink">
            <img src={cpu} className="menuicon"></img>
            Komponentit
        </Link>
        <Link to="/cameras" className="menulink">
            <img src={camera} className="menuicon"></img>
            Kamerat
        </Link>
        <Link to="/music" className="menulink">
            <img src={music} className="menuicon"></img>
            Musiikki
        </Link>
        <Link to="/furniture" className="menulink">
            <img src={furniture} className="menuicon"></img>
            Huonekalut
        </Link>
        <Link to="/books" className="menulink">
            <img src={book} className="menuicon"></img>
            Kirjat
        </Link>
        <Link to="/office" className="menulink">
            <img src={paperclip} className="menuicon"></img>
            Toimistotarvikkeet
        </Link>
        <Link to="/sports&outdoors" className="menulink">
            <img src={sport} className="menuicon"></img>
            Urheilu & Ulkoilu
        </Link>
    </div>
    )
}

export default Menu;