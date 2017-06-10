import React from 'react';
import {Image, View, Text} from 'react-native';

class GifPreview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Image
                source={{
                        uri: this.props.gif
                }}
                style={{
                    height: 300,
                    flex: 1,
                    marginTop: 10,
                    marginLeft: 10,
                    marginRight: 10
                }}
            />
        )
    }
}
export default GifPreview;