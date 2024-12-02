import { NavLink } from "react-router-dom"
import "./Navbar.css"
import { useAuth } from "../store/auth"


export const Navbar = () => {
    const {isLoggedIn} = useAuth()
    return(<>
    
            <nav className="navbar glass" style={{ height: '70px' }}>
                <span>
                    <NavLink to="/logo" style={{ display: 'flex', alignItems: 'center' }}>
                        <h1 className="logo">&nbsp;Travel Wizard</h1>
                    </NavLink>
                </span>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className=" cir_border ">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className="cir_border">Events</NavLink>
                    </li>
                    <li>
                        <NavLink to="/explore" className="cir_border">Explore</NavLink>
                    </li>
                    {/* <li> */}
                        {/* <a href="https://www.tourmyindia.com/blog/" target="_blank" rel="noopener noreferrer" className="cir_border">Blog</a> */}
                    {/* </li> */}
                    <li>
                        <NavLink to="/city" className="cir_border">Tours</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="cir_border">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="cir_border">Contact</NavLink>
                    </li>
                    {
                        isLoggedIn ? <li> 
                        <NavLink to="/logout">Logout</NavLink> 
                    </li>
                    : <>
                        <li> <NavLink to="/register">Register</NavLink> </li>
                        <li> <NavLink to="/login">Login</NavLink> </li>
                    </>
                    }
                </ul>
                <img src="src/img/menu-btn.png" alt="" className="menu-btn" />
        </nav>
        

    </>)


}