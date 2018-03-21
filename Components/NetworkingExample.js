/*   Fetch Api

      // In order to fetch content from an arbitrary URL, just pass the URL to fetch:

      fetch('https://mywebsite.com/mydata.json');


      // Fetch also takes an optional second argument that allows you to customize the HTTP request.
          You may want to specify additional headers, or make a POST request:


          fetch('https://mywebsite.com/endpoint/', {
             method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                 },
                body: JSON.stringify({
                    firstParam: 'yourValue',
                    secondParam: 'yourOtherValue',
                  }),
                });
      */
/*
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

//  https://developer.mozilla.org/en-US/docs/Web/API/Request


// https://facebook.github.io/react-native/docs/network.html

*/


import React, {Component} from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import  axios from 'axios';

export default class NetworkingExample extends Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }



    // const setup = () => {
    //     axios.defaults.baseURL = 'https://cryptic-retreat-91986.herokuapp.com';
    // };
    //
    //
    // const getMarks = userId => {
    //     const promise = new Promise((resolve, reject) => {
    //         axios
    //             .get(`/marks/${userId}`)
    //             .then(response => {
    //                 resolve(response);
    //             })
    //             .catch(error => {
    //                 reject(error);
    //             });
      //  });
       // return promise;
    //};




    componentDidMount(){
        return fetch('https://cryptic-retreat-91986.herokuapp.com')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.marks.userId,
                }, function(){

                });
 

            })
            .catch((error) =>{
                console.error(error);
            });
    }



    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data={this.state.dataSource}

                    renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}
