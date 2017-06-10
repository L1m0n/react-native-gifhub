import React from 'react';
import {ListView, View, Text} from 'react-native';
import GifPreview from '../GifPreview';
import {connect} from 'react-redux';
import fetchGifs from '../../actions/fetchGifs';

class presenter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchGifs(0, 'gifs', 'cats');

    }

    render() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dataSource = ds.cloneWithRows(this.props.gifs);
        return(
            <ListView
                dataSource={dataSource}
                renderRow={(rowData) => {
                    return(
                        <GifPreview
                            gif={rowData.gif}
                        />
                    )

                }}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gifs: state.gifs
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