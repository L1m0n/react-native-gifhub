import {SET_GIFS} from './actionTypes';

const setGifs = (data) => {
    return {
        type: SET_GIFS,
        data
    }
};

export default setGifs;