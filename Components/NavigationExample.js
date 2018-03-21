/* on the main screen app.js
    import { StackNavigator, } from 'react-navigation';

    const App = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen},
    ScrollAndList: { screen: ScrollAndList},
    });


    then in the screens which we have to navigate

    class A extecds component {
        static navigationOptions = {
        title: 'welcome to the 1st screen
        };

        render(){
            const {nagivate} = this.props.naviagtion;
            return (
                <Button
                    title= "Go to List and Scroll"
                    onPress = {() => navigate('ScrollAndList', {name: 'MoveOn' })
                    }
                    />
                    )}
                    }
 */
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import {Button, NavigatorIOS, Text, View} from 'react-native';


export default class NavigationExample extends Component{

    render() {
        return(

            <NavigatorIOS
                intialRoute={{
                    component: MySence,
                    title: 'My Initial Scene',
                    passProps: {index: 1},
                }}
                style={{flex: 1}}

            />
        )
    }
}


class MySence extends React.Component{
    static propTypes = {
        route: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
        navigator: PropTypes.object.isRequired,
    };

    constructor(props, context){
        super(props, context);
        this._onForward = this._onForward.bind(this);
    }

    _onForward(){
        let nextIndex = ++this.props.index;
        this.props.navigator.push({
            component: MySence,
            this: 'Scene'  + nextIndex,
            passProps: {index: nextIndex},
        });
    }

    render(){
        return(
            <View>
                <Text> Current Scene: {this.props.title}</Text>
                <Button
                    onPress={this._onForward}
                title="tap me to load the next scene"/>
            </View>
        );
    }
}

