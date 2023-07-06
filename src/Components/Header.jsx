import React from "react";
import troll from "./images/troll-face.png"

export default function Header(){
    return(
        <div className="header">
            <img src={troll} className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <p className="header--project">@NanoScript</p>
        </div>
    )
}