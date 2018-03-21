import React, {Component} from 'react';

import  {platform,TouchableOpacity,Animated,Dimensions,PanResponder AppRegistry,FlatList,StyleSheet,SectionList, ScrollView, Image, View,Text, Button,ImageBackground, CheckBox} from 'react-native';


/*    Scroll View  */

export default  class ScrollAndListView extends Component{

    constructor(props){
        super(props);
        this.state={
            SetCount: 0
        };
    }


_onClick(){
<Image source = {{uri: "/Users/melliferalabs/WebstormProjects/untitled6/images/Tick.png"}} style={{height: 15, width: 15}}

}

/*    _Menu(){
        if(this.state.SetCount == 1){
            return(
                <View style ={{height: '100%', width: "100%", flexDirection: "row", backgroundColor: "rgba(211,238,248,1)"}}>
                <View style={{flex:1, flexDirection:"row", alignItems: "center", justifyContent:"center", paddingRight: 50}}>
            <TouchableOpacity onPress={() => this._Menu()}>
            <View
            style ={{ borderRadius: 1,
                borderColor: "white",
                backgroundColor: "white",
                borderWidth: 1,
                height: 15,
                width: 15
            }} >

            <Image source = {{uri: "/Users/melliferalabs/WebstormProjects/untitled6/images/Tick.png"}} style={{height: 15, width: 15}}
            </View>


        )
        }
    }
    */



    render(){
        return(

    <View>
            <ImageBackground style={{ top: 0, bottom: 0, width: '100%', height: '100%'}} source={{uri:"/Users/melliferalabs/WebstormProjects/untitled6/images/Ab.jpg"}}>

             <View style={{flex:1, flexDirection:"row", alignItems: "center", justifyContent:"center", paddingRight: 50}}>
                //<Button onPress={this._OnClick()}
                </View>
        </ImageBackground>
    </View>
    )
    }
}
