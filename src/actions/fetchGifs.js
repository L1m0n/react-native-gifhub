import addGifs from './addGifs';

const fetchGifs = (offset, category, query) => {
    return function (dispatch) {
        fetch(`http://api.giphy.com/v1/${category}/search?q=${query}&api_key=dc6zaTOxFJmzC&offset=${offset}`)
            .then((response) => response.json())
            .then((json) => {
                const data = {
                    offset: offset + json.pagination.count,
                    gifs: json.data.map((gif) => {
                        return({
                                id: gif.id,
                                gif: gif.images.downsized.url,
                                thumb: gif.images.downsized_still.url,
                                url: gif.url,
                                size: gif.images.downsized.size
                            })
                    })
                };
                data.gifs = data.gifs.sort(function(a, b){return a.size - b.size});
                dispatch(addGifs(data));
            })
            .catch((err)=> console.log(err))
    }
};

export default fetchGifs;