import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../reducers';
import {Provider} from 'react-redux';
import GifsList from '../GifsList';
import logger from 'redux-logger';

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <Provider store={store}>
            <GifsList/>
        </Provider>
        )
    }
}
export default App;