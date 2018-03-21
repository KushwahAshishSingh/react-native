
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';




type Props = {};
class SecondScreen extends Component<Props> {

    static navigationOptions={
        title: 'welcome to FlexScreen'
    }

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.parentView}>

                <Button
                    title="Go to handling text inputs"
                    onPress={() =>
                        navigate('HandlingTextInputs', { name: 'HandlingTextInputs'})}/>


                <View style = {{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
                    <View style={{height:'100%', width:'45%', backgroundColor:'blue', justifyContent:'flex-start'}}/>

                     <View style={{height:'75%', width:'50%',backgroundColor:'yellow', justifyContent:'flex-end'}}/>

                </View>


                <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
                        <View style={{flex:1, flexDirection:'column'}}>
                        <View style={{height:'20%', width:'90%', backgroundColor:'orange', justifyContent:'flex-end'}}/>
                        <View style={{height:'20%', width:'75%', backgroundColor:'black', justifyContent:'center'}}/>
                            <View style={{height:'20%', width:'55%', backgroundColor:'white', justifyContent:'center'}}/>

                            <View style={{height:'20%', width:'35%', backgroundColor:'blue', justifyContent:'center'}}/>

                            <View style={{height:'20%', width:'20%', backgroundColor:'gray', justifyContent:'center'}}/>

                        </View>
                    <View style={{height: '100%', width:'40%', backgroundColor:'white', justifyContent:'center'}}/>
                    <View style={{height: '100%', width:'44%', backgroundColor:'orange', justifyContent:'flex-end'}}/>

                </View>


                 <View style={{flex:1, flexDirection: 'row',justifyContent: 'space-around'}}>
                    <View style={{height: '100%', width:'45%', backgroundColor:'green', justifyContent:'flex-start'}}/>
                     <View style={{height:'90%', width:'50%', backgroundColor: 'black', justifyContent:'flex-end'}}/>
                 </View>

            </View>
        )
    }
}





export default SecondScreen;
const styles = StyleSheet.create({
    parentView:{
      flex: 1,
backgroundColor:'red'

    },

    yellowView: {
        //flex: 1,
        backgroundColor: 'yellow',
       // justifyContent: 'flex-start',
        width: '25%',

    },
    redView: {
        //flex: 1,
        width: '25%',
       // justifyContent: 'flex-end',
        backgroundColor: 'red'
    }
});
