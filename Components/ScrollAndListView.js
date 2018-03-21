import React, {Component} from 'react';

import  {AppRegistry,FlatList,StyleSheet,SectionList, ScrollView, Image, View,Text, Button} from 'react-native';
/*    Scroll View  */

// export default  class ScrollAndListView extends Component{
//     render(){
//         return(
//             /*  remove horizontal property to make it as vertical */
//             <ScrollView horizontal={true}>
//                 <Text style={{fontSize: 121}}> Scroll View Exapmle</Text>
//                 <Text style={{fontSize: 121}}> Scroll if you like</Text>
//                 <Text style={{fontSize: 121}}> to  Scroll </Text>
//
//             </ScrollView>
//         )
//     }
// }


  /*  the FlatList component requires two props: data and renderItem..     data is the source of info for the list
       renderItem takes one item from the source and returns a formatted component to render
   */

  // export default class ScrollAndListView extends Component{
  //     render(){
  //         return(
  //             <View style={styles.container}>
  //
  //                   <FlatList  horizontal={true}
  //
  //                       data={[
  //                           {key:'Devin'},
  //                           {key:'jackson'},
  //                           {key:'james'},
  //                           {key:'joel'},
  //                           {key:'john'},
  //                           {key:'jillian'},
  //                           {key:'jimmy'},
  //                           {key:'juile'},
  //                       ]}
  //
  //                       renderItem={({item}) => <Text style={styles.item}>{item.key} </Text> }
  //
  //                   />
  //             </View>
  //         );
  //     }
  // }
  //
  // const styles = StyleSheet.create({
  //     container: {
  //         flex: 1,
  //         paddingTop: 50,
  //         alignItems:'center'
  //     },
  //     item: {
  //         padding: 10,
  //         paddingRight: 20,
  //         fontSize: 18,
  //         height: 44
  //     },
  // })
  //


/*     SECTION LIST  */

export default class ScrollAndListView extends Component{

    static navigationOptions = {
        title: "Welcome to Scroll and List View",
    };


    render(){


        const { navigate } = this.props.navigation;


        return(
            <View style={styles.container}>
                <Button title="go to FlexScreen"
                        onPress={() => navigate('FlexScreen', {name: 'FlexScreen'})}/>

                <SectionList
                    sections={[
                        {title: 'D', data:['Devin']},
                        {title: 'J', data: ['Jackson', 'James','jillian','jimmy','Joel','John']},
                    ]}
                    renderItem={({item})=> <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text> }
                    keyExtractor={(item, index) => index}
                />


            </View>
        )
    }
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader:{
        paddingTop: 2,
        paddingRight: 10,
        paddingBottom: 2,
        paddingLeft: 10,
        fontSize: 14,
        fontWeight:'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})