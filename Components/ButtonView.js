import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View,ImageBackground,Image,TouchableOpacity ,Text, ScrollView,FlatList} from 'react-native';
export default class ButtonView extends Component {



    constructor(props){
        super(props);
        this.state = {
            pMCount: 0,
            p2Count: 0,
            p3Count: 0,


        };
    }

    _MenuChange(){
        if(this.state.pMCount == 0){
            let set = 1;
            this.setState({ pMCount: set});
        }
        else if(this.state.pMCount == 1){
            let set = 0;
            this.setState({ pMCount: set });
        }
    }

    _MenuChange2(){
        if(this.state.p2Count == 0){
            let set = 1;
            this.setState({ p2Count: set});
        }
       else if(this.state.p2Count == 1){
            let set = 0;
            this.setState({ p2Count: set });
        }
    }

    _MenuChange3(){
        if(this.state.p3Count == 0){
            let set = 1;
            this.setState({ p3Count: set});
        }
        else if(this.state.p3Count == 1){
            let set = 0;
            this.setState({ p3Count: set });
        }
    }






    _PMenu() {
        if (this.state.pMCount == 1) {
            return (
                <View
                    style={{ flexDirection: 'row', padding: 20}}>
                        <View style={{
                            alignItems: "flex-start",
                        }}>

                            <TouchableOpacity onPress={() => this._MenuChange()}>
                                <View
                                    style={{
                                        borderRadius: 1,
                                        borderColor: "white",
                                        backgroundColor: "white",
                                        borderWidth: 1,
                                        height: 20,
                                        width: 20
                                    }}>
                                    <Image style={{height: 25, width: 25}}
                                           source={{uri: "/Users/melliferalabs/WebstormProjects/untitled6/images/Ticks.png"}}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    <Text style={styles.TextStyle}>SomeProperty</Text>

                </View>
            );

        }


         if (this.state.pMCount == 0) {
            return (
                <View style={{flexDirection:'row', padding: 20}}>

                        <View style={{
                            alignItems: "flex-start",
                        }}>

                            <TouchableOpacity onPress={() => this._MenuChange()}>
                                <View
                                    style={{
                                        borderRadius: 1,
                                        borderColor: "white",
                                        backgroundColor: "white",
                                        borderWidth: 1,
                                        height: 20,
                                        width: 20
                                    }}/>

                            </TouchableOpacity>
                        </View>
                    <Text style={styles.TextStyle}>SomeProperty</Text>

                </View>
            );
        }
    }


_PMenu2() {
        if (this.state.p2Count == 1){
            return (
                <View
                    style={{ flexDirection: 'row', padding: 20}}>
                    <View style={{ alignItems:"flex-start"}}>
                        <TouchableOpacity onPress={() => this._MenuChange2()}>
                            <View
                                style ={{borderRadius: 1, borderColor: "white", backgroundColor: "transparent", borderWidth: 1, height: 20, width: 20}}>
                                <Image style={{height:25, width: 25}} source={{ uri: "/Users/melliferalabs/WebstormProjects/untitled6/images/Ticks.png"}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.TextStyle}>SomeProperty</Text>

                </View>
            );

        }


          if (this.state.p2Count == 0) {
            return (
                <View style = {{flexDirection:'row', padding: 20}} >
                    <View style={{ alignItems:"flex-start"}}>
                        <TouchableOpacity onPress={() => this._MenuChange2()}>
                            <View
                                style ={{borderRadius: 1, borderColor: "white", backgroundColor: "white", borderWidth: 1, height: 20, width: 20}} />

                        </TouchableOpacity>
                    </View>
                    <Text style={styles.TextStyle}>SomeProperty</Text>

                </View>
            );
        }
        }



    _PMenu3() {
        if (this.state.p3Count == 1){
            return (
                <View
                    style={{ flexDirection: 'row', padding: 20}}>

                    <View style={{ alignItems:"flex-start"}}>

                        <TouchableOpacity onPress={() => this._MenuChange3()}>
                            <View
                                style ={{borderRadius: 1, borderColor: "white", backgroundColor: "white", borderWidth: 1, height: 20, width: 20}}>
                                <Image style={{height:20, width: 20, justifyContent: 'center', alignItems: 'center'}} source={{ uri: "/Users/melliferalabs/WebstormProjects/untitled6/images/Ticks.png"}}/>
                            </View>

                        </TouchableOpacity>
                    </View>
                    <Text style={styles.TextStyle}>SomeProperty</Text>

                </View>
            );

        }


        if (this.state.p3Count == 0) {
            return (
                <View style = {{flexDirection: 'row', padding: 20}} >
                    <View style={{ alignItems:"flex-start"}}>
                        <TouchableOpacity onPress={() => this._MenuChange3()}>
                            <View
                                style ={{borderRadius: 1, borderColor: "white", backgroundColor: "white", borderWidth: 1, height: 20, width: 20}} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.TextStyle}>SomeProperty</Text>


                </View>
            );
        }



    }






    render(){
    let theCount = 0;

    return(
        <View style={{flex:1 }}>
            <ImageBackground
                source={{uri: "/Users/melliferalabs/WebstormProjects/untitled6/images/BgImage.jpg"}}
                style={{width: '100%', height: '100%'}}>
            <ScrollView>

            <View>
                {this._PMenu()}
            </View>
            <View>
                {this._PMenu2()}
            </View>
            <View>
                {this._PMenu3()}
            </View>

            </ScrollView>
            </ImageBackground>
        </View>
    )
    }
}


const styles= StyleSheet.create({
    TextStyle: {
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10
    }
})



