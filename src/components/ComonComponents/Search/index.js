import {connect} from 'react-redux';
import presenter from './presenter'
import search from '../../../actions/search'

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        search: (query) => {
            dispatch(search(query));
        }
    }
};

const Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default Search;
