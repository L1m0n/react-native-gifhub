import GifsList from '../GifsList';
import Search from '../Search';
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class HomeScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Search/>
                <GifsList/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4b204e'
    }
});

export default HomeScreen;