import {ADD_GIFS} from './actionTypes';

const addGifs = (data) => {
    return {
        type: ADD_GIFS,
        data
    }
};

export default addGifs;