import React from "react";
import '../Styles/Navbar.scss'

const NavBar = () => {
    return ( 
        <div className="navbar">
            <div className="links">
            <a href="/home"> Home</a>
            <a href="/about"> About</a>
            <a href="/profile"> Profile</a>
            <a href="/contact"> Contact</a>

            </div>
            </div>


     );
}
 
export default NavBar;