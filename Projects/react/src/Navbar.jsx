/* 
import React from "react";
import { Link } from "react-router-dom";

const navlink = () => {
    return (
        <>
            <Link 
                to="/" 
                className="navlink"
            >
                About Us
            </Link>
            <Link 
                to="/Contact" 
                className="navlink"
            >
                Contact Us
            </Link>
        </>
    );
}

export default navlink;
 */


import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


    return(<>

        <div className="navbar">

        <Link
            to="/"
            className="navlink"
        >Home</Link>

        <Link
            to="/Contact"
            className="navlink"
        >Contact</Link>

        <Link
            to="/About"
            className="navlink"
            >AboutUs</Link>
        
        <Link
            to="/Error"
            className="navlink"
        >Error</Link>

        </div>
        



    </>)

}
export default Navbar;