import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>
                    J.M.S. Family 
                    <br />
                    <small>and</small>
                    <br />
                    Mrs. & Mr. J. Taher Basha Ashrafi
                </h2>
                <h5>
                    Prop.: <strong>Aliya Jewellers</strong>
                    <br />
                    Shroff Bazar, <br />
                    Adoni - 518 301.
                </h5>
                <p className="address">
                    Contact: +91 81435 66778.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
