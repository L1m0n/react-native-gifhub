import setQuery from './setQuery';
import setGifs from './setGifs';

const search = (query) => {
    return function (dispatch) {
        dispatch(setQuery(query));
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&offset=0`)
            .then((response) => response.json())
            .then((json) => {
                const data = {
                    offset: json.pagination.count,
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
                dispatch(setGifs(data));
            })
            .catch((err)=> console.log(err))
    }
};

export default search;