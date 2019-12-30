import React from "react";

function Navbar(props) {
    return (

        <div>
            <div class="navbar">
                <nav class="navbar navbar-light bg-light">
                    <h1>Score: {props.score}</h1>
                    <h1>Top Score: {props.topScore}</h1>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;