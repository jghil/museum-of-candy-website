import React from "react";

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-md" id="mainNavbar">
            <a href="#" className="navbar-brand">CANDY</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navLinks">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="HOME" className="nav-link">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a href="ABOUT" className="nav-link">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a href="TICKETS" className="nav-link">TICKETS</a>
                    </li>
                </ul>
            </div>
        </nav>
      );
}