import React, {Component} from 'react';
import  {AppRegistry, Text, TextInput, View, Alert} from  'react-native'

export  default class  FormExample extends Component{
    constructor(props){
        super(props);
        this.state ={value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleSubmit(event){
        alert('a name was submitted:' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <View onSubmit={this.handleSubmit}>

                    <input type="text" value={this.state.value} onChange={this.handleChange} />

                <input type="submit" value="submit"/>
            </View>
    );
        }

}