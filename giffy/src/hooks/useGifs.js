import {useEffect, useState} from "react";
import getGifsV2 from "../Services/getGifsV2";
import {useContext} from "react";
import GifsContext from "../context/GifsContext";
export function useGifs({keyword}){
    const {gifs, setGifs} = useContext(GifsContext)
    const [loading, setLoading] = useState(false)

    useEffect(function () {
        setLoading(true)

        const keywordToUse = keyword || localStorage.getItem('lastKeyword')

        getGifsV2({keyword: keywordToUse}).then(gifs=> {
            setGifs(gifs)
            setLoading(false)
            localStorage.setItem('lastKeyword', keyword)
        });
    },[keyword])

    return{loading, gifs}
}