
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions ,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ToggleSwitch from 'toggle-switch-react-native'
import CheckBox from 'react-native-check-box'
import { ScrollView } from 'react-native-gesture-handler';
export default class PostGroupPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChecked : false
    }
} 
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.groupView}>
          <View style={styles.checkboxView}>
            <CheckBox
                style={{padding: 10}}
                onClick={()=>{
                  this.setState({
                      isChecked:!this.state.isChecked
                  })
                }}
                isChecked={this.state.isChecked}
            />
          </View>
          <View style={styles.descriptionView}>
            <Text style={{fontSize : 20}}>Ceramic/Glass work</Text>            
          </View>  
          <View style={styles.iconView}>
            <Icon name="info"  size={30} />
          </View>      
        </View>  
        <View style={styles.groupView}>
          <View style={styles.checkboxView}>
            <CheckBox
                style={{padding: 10}}
                onClick={()=>{
                  this.setState({
                      isChecked:!this.state.isChecked
                  })
                }}
                isChecked={this.state.isChecked}
            />
          </View>
          <View style={styles.descriptionView}>
            <Text style={{fontSize : 20}}>Fiber/Texttile/Needle Crafts</Text>            
          </View>  
          <View style={styles.iconView}>
            <Icon name="info"  size={30} />
          </View>      
        </View>       
        <View style={styles.groupView}>
          <View style={styles.checkboxView}>
            <CheckBox
                style={{padding: 10}}
                onClick={()=>{
                  this.setState({
                      isChecked:!this.state.isChecked
                  })
                }}
                isChecked={this.state.isChecked}
            />
          </View>
          <View style={styles.descriptionView}>
            <Text style={{fontSize : 20}}>Flower Crafts</Text>            
          </View>  
          <View style={styles.iconView}>
            <Icon name="info"  size={30} />
          </View>      
        </View>   
        <View style={styles.groupView}>
          <View style={styles.checkboxView}>
            <CheckBox
                style={{padding: 10}}
                onClick={()=>{
                  this.setState({
                      isChecked:!this.state.isChecked
                  })
                }}
                isChecked={this.state.isChecked}
            />
          </View>
          <View style={styles.descriptionView}>
            <Text style={{fontSize : 20}}>Leatherwork</Text>            
          </View>  
          <View style={styles.iconView}>
            <Icon name="info"  size={30} />
          </View>      
        </View>  
        <View style={styles.groupView}>
          <View style={styles.checkboxView}>
            <CheckBox
                style={{padding: 10}}
                onClick={()=>{
                  this.setState({
                      isChecked:!this.state.isChecked
                  })
                }}
                isChecked={this.state.isChecked}
            />
          </View>
          <View style={styles.descriptionView}>
            <Text style={{fontSize : 20}}>Metal Work</Text>            
          </View>  
          <View style={styles.iconView}>
            <Icon name="info"  size={30} />
          </View>      
        </View>  
        <View style={styles.groupView}>
          <View style={styles.checkboxView}>
            <CheckBox
                style={{padding: 10}}
                onClick={()=>{
                  this.setState({
                      isChecked:!this.state.isChecked
                  })
                }}
                isChecked={this.state.isChecked}
            />
          </View>
          <View style={styles.descriptionView}>
            <Text style={{fontSize : 20}}>Houseworks</Text>            
          </View>  
          <View style={styles.iconView}>
            <Icon name="info"  size={30} />
          </View>      
        </View>  
        <View style={styles.groupView}>
          <View style={styles.checkboxView}>
            <CheckBox
                style={{padding: 10}}
                onClick={()=>{
                  this.setState({
                      isChecked:!this.state.isChecked
                  })
                }}
                isChecked={this.state.isChecked}
            />
          </View>
          <View style={styles.descriptionView}>
            <Text style={{fontSize : 20}}>Paper Crafts</Text>            
          </View>  
          <View style={styles.iconView}>
            <Icon name="info"  size={30} />
          </View>      
        </View>    
        <View style={styles.groupView}>
          <View style={styles.checkboxView}>
            <CheckBox
                style={{padding: 10}}
                onClick={()=>{
                  this.setState({
                      isChecked:!this.state.isChecked
                  })
                }}
                isChecked={this.state.isChecked}
            />
          </View>
          <View style={styles.descriptionView}>
            <Text style={{fontSize : 20}}>Stone Crafts</Text>            
          </View>  
          <View style={styles.iconView}>
            <Icon name="info"  size={30} />
          </View>      
        </View>   
        <View style={styles.groupView}>
          <View style={styles.checkboxView}>
            <CheckBox
                style={{padding: 10}}
                onClick={()=>{
                  this.setState({
                      isChecked:!this.state.isChecked
                  })
                }}
                isChecked={this.state.isChecked}
            />
          </View>
          <View style={styles.descriptionView}>
            <Text style={{fontSize : 20}}>Wood/Furniture Crafts</Text>            
          </View>  
          <View style={styles.iconView}>
            <Icon name="info"  size={30} />
          </View>      
        </View>  
        </ScrollView>                                                                     
      </SafeAreaView>

    );
  }
}
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container : {
    padding : 20,
    alignItems : 'center',
    justifyContent : 'center'
  },

  groupView : {
    flexDirection : 'row',
    width : '100%',
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 10

  },
  checkboxView : {
    width : '10%',
    height : screenHeight/12,
    alignItems : 'center',
    justifyContent : 'center'
  },
  descriptionView : {
    width : '80%',
    height : screenHeight/12,
    alignItems : 'center',
    justifyContent : 'center'
  },
  iconView : {
    width : '10%',
    height : screenHeight/12,
    alignItems : 'center',
    justifyContent : 'center'
  },
     
});