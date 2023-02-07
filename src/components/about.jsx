import React from "react";
import milk from "../imgs/milk.png";
import lolli from "../imgs/lolli_icon.png";
import pink from "../imgs/pink_donuts.png"
import sprinkles from "../imgs/sprinkles.png"

export default function About(props) {
    return(
        <section className="container-fluid px-0">
            <div className="row align-items-center content">
                <div className="col-md-6 order-2 order-md-1">
                    <img src={milk} alt="donuts with milk" className="img-fluid"/>
                </div>
                <div className="col-md-6 text-center order-1 order-md-2">
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-8 blurb mb-4 mb-md-0">
                            <h2>MUSEUM OF DONUT</h2>
                            <img src={lolli} alt="lollipop icon" className="d-none d-lg-inline"/>
                            <p className="lead"> Welcome to the Museum of Donut, a shrine to the most popular pastry dessert: the donut! Featuring a pit of 
                            rainbow sprinkles, edible donut balloons, and a seesaw in the shape of a ginorous donut.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center content">
                <div className="col-md-6 text-center">
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-8 blurb mb-4 mb-md-0">
                            <h2>OUR HISTORY</h2>
                            <img src={lolli} alt="lollipop icon" className="d-none d-lg-inline"/>
                            <p className="lead"> This interactive, hands-on, immersive exhibit blends fun and learning to create a unique experience, 
                            one that will be savored by all generations. This exhibit tells the stories of the people behind the donuts we know so 
                            well—and the science behind the cooking that gives us the rich and colorful variety of donuts we love so much.”</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={pink} alt="pink donuts" className="img-fluid"/>
                </div>
            </div>
            <div className="row align-items-center content">
                <div className="col-md-6 order-2 order-md-1">
                    <img src={sprinkles} alt="sprinkles" className="img-fluid"/>
                </div>
                <div className="col-md-6 text-center order-1 order-md-2">
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-8 blurb mb-4 mb-md-0">
                            <h2>PLAN YOUR VISIT</h2>
                            <img src={lolli} alt="lollipop icon" className="d-none d-lg-inline"/>
                            <p className="lead"> Walk-up tickets are available, but timeslots do sell out and may not be available. 
                            Advance timed-entry tickets are highly recommended.</p>
                            <p className="lead">Masks are strongly recommended indoors for everyone. Please respect our staff and your fellow donut lovers!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}