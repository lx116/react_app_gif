import React from "react";
import './Gif.css'

export default function Spinner (){

    return(
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}