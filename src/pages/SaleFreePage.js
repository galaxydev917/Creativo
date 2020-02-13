
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
import ToggleSwitch from 'toggle-switch-react-native'
export default class SaleFreePage extends Component{
  constructor(props){
    super(props);
    
} 
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <Icon name="arrow-left"  size={30}/>
          <Text color="black" style={styles.headerText}>For Sale/Free</Text>
        </View>
        <View style={styles.contentTopView}>
          <Text color="black" style={styles.headerText}>Describe your item</Text>
        </View>
        <View style={styles.titleView}> 
          <TextInput placeholder="Title" style={styles.titleTextInput}/>
        </View>
        <View style={styles.optionView}> 
          <Text style={styles.optionText}>Price (optional)</Text>
          <ToggleSwitch
            isOn={false}
            onColor="green"
            offColor="gray"
            label="Free"
            labelStyle={{ color: "gray", fontWeight: "800", fontSize : 18 }}
            size="medium"
            onToggle={isOn => console.log("changed to : ", isOn)}
          />
        </View>  
        <Text style={styles.detailText}>Details (condition, color, size, le)</Text>  
        <View style={styles.photoView}>
          <View style={styles.cameraView}>
            <Icon name="camera"  size={50}/>
          </View>
          <Text style={{fontSize : 20, marginTop : 5}}>Add Photos</Text>
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
    flex : 1
  },
  headerView : {
    flexDirection : 'row',
    width : screenWidth,
    height : screenHeight/12,
    alignItems : 'center'
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
    height : screenHeight/12,
    marginLeft : 20, 
    borderBottomWidth : 1
  },
  titleTextInput : {
    height :  screenHeight/10,
    fontSize : 18
    
  },
  optionView : {
    flexDirection : 'row',
    height : screenHeight/12,
    marginTop : 10,
    marginLeft : 20, 
    borderBottomWidth : 1,
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  optionText : {
    fontSize : 18,
    fontWeight : '800',
    color : 'gray'
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
    height : screenHeight/3,
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

  }
     
});