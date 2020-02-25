import React from "react";

function Images(props) {
    return (
        <div className="row px-5">
            <div className="col-sm-12 py-3">
                <div className="card photos">
                    <img className="img-fluid" src={props.src} alt="God/Goddess" onClick={() => props.clickedImage(props.id)}
                        height="400" width="200" />
                </div>
            </div>
        </div>
    )
}

export default Images;