

export const getGifs = async( Category ) => {

    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI( Category )}&limit=10&api_key=s3VV7F3ipSTEEFW1OQadZ7USdeSPk8O7`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {

        return {
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })


    // console.log(gifs);
    return gifs;
}