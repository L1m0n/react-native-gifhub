import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import GifPreview from '../GifPreview';
import {connect} from 'react-redux';
import fetchGifs from '../../actions/fetchGifs';

class presenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: []
        };
        this.renderNextGif = this.renderNextGif.bind(this);
    }

    componentDidMount() {
        this.props.fetchGifs(0, 'gifs', 'cats');
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.gifs.length == 0) {
            this.state.gifs.push(nextProps.gifs[this.state.gifs.length])
        }
        //console.log(nextProps.gifs);
    }

    renderNextGif(){
        this.setState({
            gifs: this.props.gifs.slice(0, this.state.length)
        });
    }

    render() {
        return(
        <View>
            <Text onPress={this.appendGifs}>
                asd
            </Text>
            <ScrollView>
                {this.state.gifs && this.state.gifs.map((gif) => {
                    return (
                        <GifPreview next={this.renderNextGif} key={gif.id} gif={gif}/>
                    )
                })}
            </ScrollView>
        </View>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        gifs: state.data.gifs
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