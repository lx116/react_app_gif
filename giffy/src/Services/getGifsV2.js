import {API_KEY} from "./settings";

export default function getGifs ({keyword = 'dog'} = {} ) {

    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=vkZ4g4zC40NbPRbqTMz9DCLEqX94DR5K&q=${keyword}&limit=30&offset=0&rating=r&lang=en`
    return fetch(apiUrl).then(res => res.json()).then(response => {
        const {data = []} = response
        if (Array.isArray(data)){
            const gifs = data.map(image =>{
                const {images, title, id} = image
                const {url} = images.downsized_medium
                return {title, id, url}
            })
            console.log(gifs)
            return gifs
        }
    })
}