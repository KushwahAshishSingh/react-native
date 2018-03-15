
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,AppRegistry
} from 'react-native';



class UselessTextInput extends  Component{


    // constructor() {
    //     super();
    //     this.state = {name: "Ashish"};
    // }
    //
    // render() {
    //     setTimeout(() => {
    //         this.setState({name: "singh"});
    //     }, 1000)
    //     return (
    //
    //
    //         <Text>
    //             {this.state.name}
    //         </Text>
    //
    //         );
    // }


    render() {
        return(
            <TextInput
                {...this.props}
            editable = {true}
                maxLength = {40}

            />
        );
    }
}




export default class StateAndProb extends Component {


    constructor(props){
        super(props);
        this.state = {
            text: 'red '
        };
    }
    render(){
        return (
            <View style ={{ backgroundColor: this.state.text }}>

                <UselessTextInput
                onChangeText = {(text) => this.setState({text})}
                value = {this.state.text}
                />
            </View>

        );
    }
}

