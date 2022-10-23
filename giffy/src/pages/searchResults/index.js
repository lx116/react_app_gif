import React from "react";
import ListOfGifs from "../../Components/ListOfGifs";
import {useGifs} from "../../hooks/useGifs"
import Spinner from "../../Components/Spinner";

export default function SearchResults ({params}){
    const {keyword} = params
    const {loading, gifs} = useGifs({keyword})

    return <>
        {loading
            ? <Spinner />
            : <ListOfGifs gifs={gifs}/>
        }
    </>
}