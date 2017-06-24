import React from  'react';
import {View, StyleSheet} from 'react-native';
import Menu from '../Menu'

class Header extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Menu/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    wrapper: {
        padding: 20,
        elevation: 5,
        backgroundColor: '#431c47',
    }
});

export default Header;