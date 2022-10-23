import React from "react";
import {useState} from "react";
import {useLocation} from "wouter";
import Spinner from "../../Components/Spinner";
import ListOfGifs from "../../Components/ListOfGifs";
import {useGifs} from "../../hooks/useGifs";

export default function Home (){
    const [keywords, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs({keywords})


    const handleSubmit = evt =>{
        evt.preventDefault()
        // ir a la siguiente ruta
        pushLocation(`/search/${keywords}`)
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

    return(
        <>
            <h1>HOLA MUNDO</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder="Buscar Gif..." type="text"/>
            </form>
            {loading
                ? <Spinner />
                : <ListOfGifs gifs={gifs}/>
            }
        </>
    )
}
