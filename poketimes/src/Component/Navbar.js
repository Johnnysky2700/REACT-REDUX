import React from "react";

const Navbar = () => {
    return (
       <nav className="nav-wrapper red darken-3">
         <div className="container">
            <a className="brand-logo">Poke's Times</a>
            <ul className="right">
                <li><a href="/">Home</a></li>
                <li><a href="/about">Contact</a></li>
                <li><a href="/contact">About</a></li>
            </ul>
         </div>
       </nav>
    )
}

export default Navbar;