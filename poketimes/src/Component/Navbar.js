import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate(); // ✅ Correct way to navigate in React Router v6+

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(''); // ✅ Replaces props.history.push
        }, 2000);

        return () => clearTimeout(timer); // Cleanup to prevent memory leaks
    }, [navigate]);

    return (
       <nav className="nav-wrapper red darken-3">
         <div className="container">
            <Link to="/" className="brand-logo">Poke's Times</Link> {/* ✅ Use Link instead of <a> */}
            <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
         </div>
       </nav>
    );
};

export default Navbar;

