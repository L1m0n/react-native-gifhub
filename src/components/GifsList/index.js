import {connect} from 'react-redux';
import fetchGifs from '../../actions/fetchGifs';
import presenter from './presenter';

const mapStateToProps = (state) => {
    return {
        gifs: state.data.gifs,
        offset: state.data.offset
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGifs: (offset, category, query) => {
            dispatch(fetchGifs(offset, category, query));
        }
    }
};

const GifsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default GifsList;