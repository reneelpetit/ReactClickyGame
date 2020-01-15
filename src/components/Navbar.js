import React from "react";

function Navbar(props) {
    return (

        <div>
            <div className="navbar">
                <nav className="navbar navbar-light bg-light mx-auto">
                    <h1> Score: {props.score} </h1>
                    <h1> Top Score: {props.topScore} </h1>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;