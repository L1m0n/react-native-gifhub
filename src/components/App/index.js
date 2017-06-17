import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../reducers';
import {Provider} from 'react-redux';
import logger from 'redux-logger'
import HomeScreen from '../HomeScreen';

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
            <HomeScreen/>
        </Provider>
        )
    }
}
export default App;