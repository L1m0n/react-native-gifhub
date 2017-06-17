import {SET_QUERY} from './actionTypes';

const setQuery = (query) => {
    return {
        type: SET_QUERY,
        query
    }
};

export default setQuery;