import addGifs from './addGifs';

const fetchGifs = (offset, category, query) => {
    return function (dispatch) {
        fetch(`http://api.giphy.com/v1/${category}/search?q=${query}&api_key=dc6zaTOxFJmzC&offset=${offset}`)
            .then((response) => response.json())
            .then((json) => {
                const data = [];
                for (let i = 0; i < json.data.length; i +=1) {
                    data.push({
                        id: json.data[i].id,
                        gif: json.data[i].images.downsized.url,
                        thumb: json.data[i].images.downsized_still.url,
                        url: json.data[i].url
                    });
                }
                dispatch(addGifs(data));
                //console.log(data);
            })
            .catch((err)=> console.log(err))
    }
};

export default fetchGifs;