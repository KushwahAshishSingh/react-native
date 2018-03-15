
// on click change background color

import React,{Component} from 'react';
import {Alert, AppRegistry, Button, StyleSheet, View,TextInput} from 'react-native';


class Ask extends Component{
    render(){
        return(
            <TextInput
                {...this.props}
                editable={true}
                />
        )
    }
}


export  default  class HandlingTouches extends  Component{

    constructor(props){
        super(props);
        this.state = {text : 'yellow '}
    }

    _onPressButton(){
Alert.alert('hello')    }

    render(){
        return(
            <View style={{flex: 1,
                justifyContent:'center', backgroundColor: this.state.text}}>


                <View style = {styles.buttonContainer}>
                    <Button
                        title="press Me"
                        onPress = {(text) => this.setState({text:'red'}) }
                        value={this.state.text}
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress = {(text) => this.setState({text:'orange'})}
                        value={this.state.text}
                        title="pressMe"
                        onClick={this._onPressButton}
                    color="#841584"
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
    },
    buttonContainer:{
        margin: 20,
        justifyContent: 'space-between',
        backgroundColor:'red'
    },
    alternativeLayoutButtonContainer:{
        margin: 20,
        justifyContent: 'space-between',
        backgroundColor: 'orange'
    }

})