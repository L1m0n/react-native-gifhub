import React from  'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opened: false,
        };

        this.overlayScale = new Animated.Value(0);
        this.overlayOpacity = new Animated.Value(0);
        this._menuToogle = this._menuToogle.bind(this);
    }

    _menuToogle(){
        this.setState({
            opened: !this.state.opened
        });
        //this.overlayScale.setValue(0);
        this.overlayOpacity.setValue(0);
        Animated.timing(
            this.overlayOpacity,
            {
                toValue: this.state.opened ? 0 : 1,
                duration: 5,
            }
        ).start();
        Animated.timing(
            this.overlayScale,
            {
                toValue: this.state.opened ? 0 : 1,
                duration: 700,
            }
        ).start();
    }

    render(){
        let overlayOpacity = this.overlayOpacity;
        let overlayScale = this.overlayScale;
        return(
            <View style={this.state.opened ? stylesMenuOpened.container : styles.container}>
                <View style={styles.header}>

                </View>
                <Animated.View style={{
                    position: 'absolute',
                    elevation: 15,
                    right: -965,
                    top: -965,
                    borderRadius: 2000,
                    zIndex: 1,
                    backgroundColor: '#e32095',
                    width: 2000,
                    height: 2000,
                    opacity: overlayOpacity,
                    transform: [
                        {scale: overlayScale}
                    ]
                }}>

                </Animated.View>
                <TouchableOpacity
                    onPress={this._menuToogle}
                    style={styles.button}>
                    <Icon
                        style={styles.icon}
                        name="navicon"
                        size={25}
                        color="#fff"
                    />
                </TouchableOpacity>

                <View style={styles.menu}>

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
        height: Dimensions.get("window").height,
        zIndex: -1
    },
    header: {
        padding: 20,
        height: 65,
        backgroundColor: '#431c47',
        elevation: 5,
        //backgroundColor: '#000',
    },
    menu: {

    },
    icon: {
        justifyContent: 'center'
    },
    button: {
        width: 30,
        height: 30,
        paddingLeft: 4,
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 5,
        elevation: 25,
    },
    overlay: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: 0,
        height: 0,
        borderRadius: 50,
        transform:[
            {
                translateX: -30
            },
            {
                translateY: 30
            }
        ],
        zIndex: 5,
        backgroundColor: '#e32095'
    },
    overlayVisible: {
        position: 'absolute',
        elevation: 16,
        right: -40,
        top: -40,
        borderRadius: 0,
        transform:[
            {
                translateX: -30
            },
            {
                translateY: 30
            }
        ],
        zIndex: 2,
        backgroundColor: '#e32095',
        width: 1000,
        height: 1000,
    }
});
const stylesMenuOpened = StyleSheet.create({
    container: {
        position: 'absolute',
        elevation: 4,
        top: 0,
        left: 0,
        width: '100%',
        height: Dimensions.get("window").height,
        zIndex: 2,
        //backgroundColor: '#000'
    },
    menu: {

    },
    overlay: {
        position: 'absolute',
        elevation: 15,
        right: -40,
        top: -40,
        borderRadius: 0,
        transform:[
            {
                translateX: -30
            },
            {
                translateY: 30
            }
        ],
        zIndex: 1,
        backgroundColor: '#e32095',
        width: 1000,
        height: 1000,
    }
});

export default Header;