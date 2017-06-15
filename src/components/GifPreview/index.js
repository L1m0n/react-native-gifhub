import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

class GifPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbLoaded: false,
            gifLoaded: false
        }
    }

    render() {
        return(
            <View style={styles.container} >
                <View style={styles.wrapper}>
                    <Image
                        source={{
                            uri: this.props.gif.gif
                        }}
                        style={styles.gif}
                    />
                </View>
                {/*<View style={this.state.gifLoaded ? styles.wrapperHidden : styles.wrapper}>
                    <Image
                        source={{uri: this.props.gif.thumb }}
                        style={ styles.thumb}
                        onLoad={() => {
                            this.setState({thumbLoaded: true});
                        }}
                    />
                </View>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        position: 'relative',
        flex: 1,
        height: 300,
        backgroundColor: 'red',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    wrapper: {
        backgroundColor: '#e3e3e3',
        position: 'absolute',
        height: 300,
        width: '100%',
        top: 0,
        left: 0
    },
    wrapperHidden: {
        display: 'none'
    },
    gif: {
        height: 300,
        flex: 1,
    },
    thumb: {
        height: 300,
        flex: 1
    }
});

export default GifPreview;