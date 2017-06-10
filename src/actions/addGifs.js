import {ADD_GIFS} from './actionTypes';

const addGifs = (gifs) => {
    return {
        type: ADD_GIFS,
        gifs
    }
};

export default addGifs;