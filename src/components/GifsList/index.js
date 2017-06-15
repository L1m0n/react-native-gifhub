import React from 'react';
import {ScrollView, ListView, View, Text, Image} from 'react-native';
import GifPreview from '../GifPreview';
import {connect} from 'react-redux';
import fetchGifs from '../../actions/fetchGifs';

class presenter extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.id !== r2.id
        });
        this.state = {
            dataSource: ds.cloneWithRows([]),
           images: []
        }
    }

    componentWillMount(){
        this.props.fetchGifs(0, 'gifs', 'cats');
    }

    componentWillReceiveProps(nextProps) {
        const images = nextProps.gifs;

        this.setState({
            images,
            dataSource: this.state.dataSource.cloneWithRows(images)
        })
    }

    _renderImage(row) {
        return(
            <GifPreview
                key={row.id}
                gif={row}
            />

        )
    }

    render() {
        const {dataSource} = this.state;
        return(
            <View style={{backgroundColor: '#111', flex: 1}}>
                <ListView
                    contentContainerStyle={{flexDirection: 'column', flexWrap: 'wrap'}}
                    initialListSize={2}
                    enableEmptySections={true}
                    dataSource={dataSource}
                    renderRow={this._renderImage}
                    onEndReached={() => this.props.fetchGifs(this.props.offset, 'gifs', 'cats')}
                />
            </View>

        )
    }
}
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