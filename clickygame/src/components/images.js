import React from "react";

function Images(props) {
    return (
        <div>
            <div class="images">
                <img src={props.src} onClick = {() => props.clickedImage(props.id)} 
                height = "200" width = "200" />
            </div>
        </div>
    )
}

export default Images;