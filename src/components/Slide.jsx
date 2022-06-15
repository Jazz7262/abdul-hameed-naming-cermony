import React from "react";
import "../styles/Slide.css";

function Slide() {
    return (

        <section id="slide" data-aos="zoom-out">
            <div className="img-container">
                <img src="./assets/images/slide-bg.jpg" alt="heart-bg" />
            </div>
            <div className="text-content">
                <h3>We Are Naming our Son</h3>
                <h1>Save Our Date</h1>
                <p>
                    20<sup>th</sup> June, 2022
                </p>
            </div>
        </section>
    );
}

export default Slide;
