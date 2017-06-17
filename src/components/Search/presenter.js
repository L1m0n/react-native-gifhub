import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class presenter extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        placeholder="Type for search"
                        onChangeText={(text) => this.setState({text})}
                        onSubmitEditing={()=>this.props.search(this.state.text)}
                    />
                    <Icon
                        style={styles.icon}
                        name="search"
                        size={25}
                        color="#a4a6a9"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent',
        padding: 10
    },
    container: {
        backgroundColor: '#f3f3f3',
        shadowColor: '#000',
        elevation: 5,
        borderRadius: 3,
        position: 'relative'
    },
    textInput: {
        height: 40,
        fontSize: 16,
        color: '#333',
        paddingLeft: 10,
        zIndex: 2
    },
    icon: {
        position: 'absolute',
        right: 10,
        top: 5
    }
});

export default presenter;