import React from "react";

function Navbar(props) {
    return (

        <div>
            <div className="navbar">
                <nav className="navbar navbar-light text-white mx-auto">
                    <h1 className="px-3"> Score: {props.score} </h1>
                    <h1> Top Score: {props.topScore} </h1>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;