
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View, Button
} from 'react-native';



type Props = {};
class MainScreen extends Component<Props> {

    static  navigationOptions = {
        title: 'welcome to Flex MainScreen'
    }


    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>


                <Button title="go to State And Probs"
                        onPress={() =>
                            navigate('StateAndProb', {name: 'StateAndProb'})}/>


                <View style={{flex: 1,justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}>
                    <View style={{ height:'100%',width: '25%', backgroundColor: 'red'}}/>
                </View>




                <View style={styles.bluebox}/>
                <View style={styles.blackbox}/>

            </View>
        );
    }
}

export default MainScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'gray',

    },
        redbox: {
        flex: 1,


            backgroundColor: 'red'
        },
        bluebox: {
        flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 100,
            backgroundColor: 'blue'
        },
        blackbox: {
        flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            width: 100,
            height: 100,
            backgroundColor: 'black'
        }

});
