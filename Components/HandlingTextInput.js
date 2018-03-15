import React, {Component} from 'react';
import  {AppRegistry, Text, TextInput, View} from  'react-native';

export default class HandlingTextInput extends Component {
    constructor(props){
        super(props);
        this.state = {text: ''};
    }
    render(){
        return (
        <View style={{padding: 10}}>

            <TextInput
            style={{height: 90}}
            placeholder ="type here to translate"


              onChangeText={(text) => this.setState({text})}/>


            <Text style={{padding: 10, fontsize: 90}}>
                {this.state.text.split(' ').map((word) => word && '🍕' && 'ashish').join('')}
            </Text>

        </View>
    )
    }
}
