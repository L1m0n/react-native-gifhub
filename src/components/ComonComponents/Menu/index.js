import React from  'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Menu extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Icon
                        style={styles.icon}
                        name="navicon"
                        size={25}
                        color="#fff"
                    />
                </TouchableOpacity>
                <View style={styles.overlay}>

                </View>
                <View style={styles.menu}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        overflow: 'visible'
    },
    menu: {

    },
    icon: {
        justifyContent: 'center'
    },
    button: {
        alignSelf: 'flex-end',
        width: 30,
        height: 30,
        paddingLeft: 4,
        justifyContent: 'center',
        zIndex: 5
    },
    overlay: {
        position: 'absolute',
        right: -20,
        top: -20,
        width: 20,
        height: 20,
        borderRadius: 50,
        transform:[
            {
                translateX: -20
            },
            {
                translateY: 20
            }
        ],
        zIndex: 4,
        backgroundColor: '#e32095'
    },
    overlayVisible: {
        position: 'absolute',
        right: -20,
        top: -20,
        borderRadius: 50,
        transform:[
            {
                translateX: -30
            },
            {
                translateY: 30
            }
        ],
        zIndex: 4,
        backgroundColor: '#e32095',
        width: 1000,
        height: 1000,
    }
});

export default Menu;