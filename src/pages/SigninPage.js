
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
import Icon from 'react-native-vector-icons/Feather';
export default class SigninPage extends Component{
  constructor(props){
    super(props);
    
} 
  render(){
    return (
      <SafeAreaView style={styles.container}>
          <ImageBackground  style={styles.background} source={require('../assets/imgs/background.png')} >
            <View style={styles.logoview}>
              <Image style={styles.logoimg} source={require('../assets/imgs/logo.png')} />

            </View>
            <View style={styles.textinputview}> 
                <Icon name="user"  size={30} color="white"/>
                <TextInput style={styles.textinput} placeholderTextColor={'white'} placeholderTextSize = {40} placeholder=" USER NAME"/>
            </View>  
            <View style={styles.textinputview}> 
                <Icon name="lock"  size={25} color="white" />
                <TextInput style={styles.textinput} placeholderTextColor={'white'} placeholder=" PASSWORD"/>
            </View>  
            <View style={styles.forgottextview}>
                <Text style={styles.forgottext}>Forgot Password?</Text>
            </View>  
            <TouchableOpacity>
                <View style={styles.signinBtn}>
                    <Text style={styles.signiText}>Login</Text>
                </View>
            </TouchableOpacity>   
            <View style={styles.signuptextView}> 
                <Text style={styles.signupText}>Don't have account</Text>
                <TouchableOpacity onPress={this.props.gotoSignupPage}>
                    <Text style={styles.signupBtnText}>Sign up</Text>
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
    height : screenHeight/3,
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
    marginLeft : 50
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