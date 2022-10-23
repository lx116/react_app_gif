import React from "react";
import './Gif.css'
import {Link} from 'wouter'

export default function Gif({title, id, url}){
    return(
        <div className="Gif">
            <Link to={`/detail/${id}`}>
                <img alt={title} src={url}/>
            </Link>
        </div>
    )
}