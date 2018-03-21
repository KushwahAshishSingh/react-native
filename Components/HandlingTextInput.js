import React, {Component} from 'react';
import  {AppRegistry, Text, TextInput, View, Button} from  'react-native';

export default class HandlingTextInput extends Component {
    constructor(props){
        super(props);
        this.state = {text: ''};
    }

    static  navigationOptions = {
        title: 'Welcome to Handling Text Inputs',
    };


    render(){

        const { navigate } = this.props.navigation;


        return (
        <View style={{padding: 10}}>

            <TextInput
            style={{height: 90}}
            placeholder ="type here to translate"


              onChangeText={(text) => this.setState({text})}/>


            <Text style={{padding: 10, fontSize: 50}}>
                {this.state.text.split(' ').map((word) => word && '🍕' && 'ashish').join('')}
            </Text>

            <Button
            title="Go to Main Screen"
            onPress={() =>
            navigate('MainScreen', {name: 'MainScreen'})} />
        </View>
    )
    }
}
