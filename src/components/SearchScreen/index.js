import GifsList from '../ComonComponents/GifsList';
import Search from '../ComonComponents/Search';
import Header from '../ComonComponents/Header';
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class SearchScreen extends Component {
    _scrollToTop(list){
        list.scrollTo({x: 0, y: 0, animated: true});
    }
    _triggerScroll(){
        let el = this.child._reactInternalInstance._renderedComponent._instance;
        el.showAlert('asads');
        //console.log();
    }
    render() {
        return(
            <View style={styles.container}>
                <Header/>
                <Search triggerScroll={this._triggerScroll.bind(this)}/>
                <GifsList ref={instance => this.child = instance} scrollTo={this._scrollToTop} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4b204e',
        paddingTop: 70
    }
});

export default SearchScreen;