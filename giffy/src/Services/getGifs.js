export default function getGifs () {

    const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=vkZ4g4zC40NbPRbqTMz9DCLEqX94DR5K&q=cat&limit=20&offset=0&rating=g&lang=en'

     return fetch(apiUrl).then(res => res.json()).then(response => {
        const {data} = response
        const gifs = data.map(image => image.images.downsized_medium.url)
        console.log(gifs)
        return gifs
    })
}