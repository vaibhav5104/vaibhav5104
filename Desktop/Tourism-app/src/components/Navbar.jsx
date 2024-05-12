import React from "react";
import '../style.css';
import '../responsive.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import  useState from 'react';
import City from './City';
import Home from './Home';
import Contributions from "./Contributions";
import Event from "./Events";
import About from "./About";
import Explore from "./Explore";
import Contact from "./Contact";

const Nav = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/city" element={<City />} />
                <Route exact path="/contributions" element={<Contributions />} />
                <Route exact path="/events" element={<Event />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/explore" element={<Explore />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
const Navbar = () => {
    // const location = useLocation();    const [isActive, setIsActive] = useState(false);

    // const [isActive, setIsActive] = useState(false);
// 
    // const toggleActive = () => {
        // setIsActive(!isActive);
    // };

    return (
        <nav className="navbar glass" style={{ height: '70px' }}>
            <span>
                <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
                    
                    <h1 className="logo">&nbsp;Travel Wizard</h1>
                </a>
            </span>
            <ul className="nav-links">
                <li>
                    <Link to="/" id="pri" className=" cir_border">Home</Link>
                </li>
                <li>
                    {/* <a href="#events" id="sec" className="cir_border">Events</a> */}
                    <Link to="/events" id="sec" className="cir_border">Events</Link>
                    {/* <Link to="/events" id="sec" className={` ${isActive ? "active cir_border" : ""}`} onClick={toggleActive}>Events</Link> */}

                </li>
                <li>
                    {/* <a href="/explore.html" id="tri" className="cir_border">Explore</a> */}
                    <Link to="/explore" id="sext" className="cir_border">Explore</Link>


                </li>
                <li>
                    <a href="https://www.tourmyindia.com/blog/" target="_blank" rel="noopener noreferrer" id="quart" className="cir_border">Blog</a>
                </li>
                <li>
                    <Link to="/city" id="quint" className="cir_border">Tours</Link>
                </li>
                <li>
                    {/* <a href="#about" id="sext" className="cir_border">About</a> */}
                    {/* <Link to="/about" id="sext" className="cir_border">About</Link> */}
                    <Link to="/about" id="tri" className="cir_border">About</Link>


                </li>
                <li>
                    {/* <a href="/contributions.html" target="_blank" rel="noopener noreferrer" id="sept" className="cir_border">Contributions</a> */}
                    <Link to="/contributions"  rel="noopener noreferrer" id="sept" className="cir_border">Contributions</Link>

                </li>
                <li>
                    {/* <a href="#contact" id="oct" className="cir_border">Contact</a> */}
                    <Link to="/contact" id="oct" className="cir_border">Contact</Link>

                </li>
                
            </ul>
            <img src="src/img/menu-btn.png" alt="" className="menu-btn" />
        </nav>
    );
}

export default Nav;
