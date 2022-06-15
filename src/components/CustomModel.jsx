import React from "react";
import $ from "jquery";
import AOS from "aos";
import "../styles/CustomModel.css";

function CustomModel() {
    function handleClick() {
        $("#modal").fadeOut();
        $("body").removeClass("body-fixed");
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
        
        document.getElementById("audio").play();
    }

    return (
        <section id="modal">
            <div className="modal-content">
                <div className="modal-heading">
                    <h3 className="modal-title">
                        J.M.S. Family's Naming Ceremony Invitation
                    </h3>
                </div>
                <div className="modal-body">
                    <p>From</p>
                    <h4 className="modal-description">
                        Mrs. & Mr. J. Taher Basha Ashrafi
                    </h4>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={handleClick}>
                        Open
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CustomModel;
