import React from "react";
import hand from '../imgs/hand2.png';

export default function Home(props) {
    return (
        <section className="container-fluid px-0">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div id="headingGroup" className="text-white text-center d-none d-lg-block">
                        <h1>MUSEUM<span>/</span>OF<span>/</span>DONUT</h1>
                        <h1>MUSEUM<span>/</span>OF<span>/</span>DONUT</h1>
                        <h1>MUSEUM<span>/</span>OF<span>/</span>DONUT</h1>
                        <h1>MUSEUM<span>/</span>OF<span>/</span>DONUT</h1>
                        <h1>MUSEUM<span>/</span>OF<span>/</span>DONUT</h1>
                        <h1>MUSEUM<span>/</span>OF<span>/</span>DONUT</h1>
                        <h1>MUSEUM<span>/</span>OF<span>/</span>DONUT</h1>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={hand} alt="hand with donut" className="img-fluid"/>
                </div>
            </div>
        </section>
    );
} 