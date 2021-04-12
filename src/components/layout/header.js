import React from "react"
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.svg"
import "./header.css"

const Header = () => {
    return (
    <div className="bar">
        <Link to="/">
            <div className="iconBox">
                <img className="icon" src={Logo} alt="Home Button" />
            </div>
        </Link>
        <h3 className="pageTitle">Reel Cinema</h3>
        {/* <div class="search">
            <input type="search" placeholder="search..." />
        </div> */}
    </div>
    )
}

export default Header