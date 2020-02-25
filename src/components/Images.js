import React from "react";

function Images(props) {
    return (
        <div className="row">
            <div className="col-sm-12 pt-5">
                <div className="card photos">
                    <img className="img-fluid" src={props.src} alt="God/Goddess" onClick={() => props.clickedImage(props.id)}
                        height="500" width="300" />
                </div>
            </div>
        </div>
    )
}

export default Images;