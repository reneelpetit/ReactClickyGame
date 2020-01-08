import React from "react";

function Images(props) {
    return (
        <div className="card">
            <img className="img-fluid" src={props.src} onClick={() => props.clickedImage(props.id)}
                height="300" width="300" />
        </div>
    )
}

export default Images;