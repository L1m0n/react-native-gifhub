import * as actionTypes from '../actions/actionTypes';

const gifs = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ADD_GIFS:
            return Object.assign({}, state, action.gifs);
        default:
            return state;
    }
};

export default gifs;