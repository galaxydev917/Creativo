
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
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignupPage extends Component{
  constructor(props){
    super(props);
    
} 
  render(){
    return (
      <SafeAreaView style={styles.container}>
          <ImageBackground  style={styles.background} source={require('../assets/imgs/background.png')} >
            <View style={{flexDirection : 'row', alignItems : 'center', marginLeft : 10, marginTop : 40}}>
              <Icon name="arrow-left"  size={30} color="white"/>
              <Text style={{color:'white', fontSize : 24, marginLeft : '20%'}}>Create Account</Text>
            </View>
            <View style={styles.logoview}>
              <Image style={styles.logoimg} source={require('../assets/imgs/avatar1.png')} />

            </View>
            <View style={styles.textinputview}> 
                <Icon name="user"  size={25} color="white"/>
                <TextInput style={styles.textinput} placeholderTextColor={'white'} placeholderTextSize = {40} placeholder="  USER NAME"/>
            </View>  
            <View style={styles.textinputview}> 
                <Icon name="envelope-o"  size={25} color="white"/>
                <TextInput style={styles.textinput} placeholderTextColor={'white'} placeholderTextSize = {40} placeholder="  Email"/>
            </View>              
            <View style={styles.textinputview}> 
                <Icon name="lock"  size={25} color="white" />
                <TextInput style={styles.textinput} placeholderTextColor={'white'} placeholder="  PASSWORD"/>
            </View>  

            <TouchableOpacity>
                <View style={styles.signinBtn}>
                    <Text style={styles.signiText}>Register</Text>
                </View>
            </TouchableOpacity>   
            <View style={styles.signuptextView}> 
                <Text style={styles.signupText}>Already Member?</Text>
                <TouchableOpacity onPress={this.props.gotoSignupPage}>
                    <Text style={styles.signupBtnText}>Log in</Text>
                </TouchableOpacity>
 
            </View>                                                   
          </ImageBackground >        

      </SafeAreaView>

    );
  }
}
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container : {
    resizeMode: 'cover',
    flex : 1
  },
  background : {
    width : screenWidth,
    height :screenHeight,
    flex : 1
  },
  logoview : {
    width : screenWidth,
    height : screenHeight/5,
    alignItems : 'center',
    justifyContent : 'center',
  },
  logoimg : {
    width : 150,
    height : 150,
    borderRadius : 30
  },
  textinputview : {
    flexDirection: 'row',
    alignItems : 'center',
    width : screenWidth-100,
    height: 50,
    marginTop : 20,
    marginLeft : 50,
    borderColor : 'white',
    borderBottomWidth : 1,
  }, 

  textinput : {
      width : screenWidth-100,
      height: 60,
  },
  forgottextview : {
    flexDirection: 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    marginBottom : 20,
    height: 50,
    
  },
  forgottext : {
      color : 'white',
      textAlign : 'right' ,
      width : screenWidth - 50
      // textAlign : 'left'
  },  
  signinBtn: {
    backgroundColor:'#dfd1c2',
    width : screenWidth - 100,
    height: 50,
    borderRadius:20,
    justifyContent : 'center',
    alignItems : 'center',
    shadowColor: '#919090',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    elevation: 10,  
    marginLeft : 50,
    marginTop : 30
  },
  signiText : {
      color : '#ce6b19',
      fontSize : 22,
      
      fontWeight : 'bold'
  }, 

  signuptextView : {
      alignItems : 'center',
      marginTop : 100,
  },    
  signupText : {
      fontSize : 16,
      color : 'white'
  },
  signupBtnText : {
      fontSize : 18,
      fontWeight : 'bold' ,
      color : 'white'
  },        
});