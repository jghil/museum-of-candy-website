import React from "react";

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-dark navbar-expand-md py-0 fixed-top" id="mainNavbar">
            <a href="/#" className="navbar-brand">DONUT</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLinks" aria-expanded="false" aria-label="toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navLinks">
                <div className="navbar-nav">
                    <li className="nav-item">
                        <a href="/#" className="nav-link">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a href="/#" className="nav-link">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a href="/#" className="nav-link">TICKETS</a>
                    </li>
                </div>
            </div>
        </nav>
      );
}