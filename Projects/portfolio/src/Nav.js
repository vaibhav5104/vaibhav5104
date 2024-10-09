import React from "react";
import {Link} from "react-router-dom"

const Nav = () => {
    return(
    <>
    
        <div className="navbar">

            <Link
                to="/"
                className="navlink"
            >Home</Link>
            <Link
                to="/About"
                className="navlink"
            >About</Link>
            <Link
                to="/Projects"
                className="navlink"
            >Projects</Link>
            <Link
                to="/Contacts"
                className="navlink"
            >Contacts</Link>
        </div>

    </>)
}

export default Nav;