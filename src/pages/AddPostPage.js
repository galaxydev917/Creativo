
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions ,
  Image,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dropdown } from 'react-native-material-dropdown';

export default class AddPostPage extends Component{
  constructor(props){
    super(props);
    
} 
  render(){
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <Icon name="arrow-left"  size={30}/>
          <Text color="black" style={styles.headerText}>Add Post to Group</Text>
        </View>
        <View style={styles.titleView}> 
          <TextInput placeholder="Subject or Question" style={styles.titleTextInput}/>
        </View>

        <Text style={styles.detailText}>Message or Question Details</Text>  
        <View style={styles.photoView}>
          <View style={styles.cameraView}>
            <Icon name="camera"  size={50}/>
          </View>
          <Text style={{fontSize : 20, marginTop : 5}}>Add Photos</Text>
         
        </View> 
        <View style={styles.selectboxView}>
          <Text style={{fontSize : 20}}>Posting to:</Text>
          <Text style={{fontSize : 20, marginLeft : 10}}>Wood Working</Text>
          <Icon name="angle-down"  style={{marginLeft : 10, marginTop : 10}} size={30}/>
        </View>        

      </SafeAreaView>

    );
  }
}
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container : {
    padding : 20,
  },
  headerView : {
    flexDirection : 'row',
    width : screenWidth,
    height : screenHeight/10,
    // alignItems : 'center'
  },
  headerText : {
    marginLeft : 20, 
    fontSize : 20, 
    fontWeight : '600'
  },
  contentTopView : {
    flexDirection : 'row',
    width : screenWidth,
    height : screenHeight/5,
    alignItems : 'center'
    
  },  
  titleView : {
    height : screenHeight/10,
    marginLeft : 20, 
    borderBottomWidth : 1
  },
  titleTextInput : {
    height :  screenHeight/8,
    fontSize : 18
    
  },

  detailText : {
    color: "gray", 
    fontWeight: "800", 
    fontSize : 18,
    marginLeft : 20,
    marginTop : 10,
    
  },
  photoView : {
    // width : screenWidth,
    height : screenHeight*2/5,
    alignItems : 'center',
    justifyContent : 'center'
  },
  cameraView : {
    backgroundColor : 'gray',
    borderRadius : 50,
    width : 100,
    height : 100,
    alignItems : 'center',
    justifyContent : 'center'

  },
  selectboxView : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center'

  }

     
});