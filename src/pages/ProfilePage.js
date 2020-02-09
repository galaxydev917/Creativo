
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions ,
  Image,
  ImageBackground,
  ScrollView, 
  TextInput,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

export default class ProfilePage extends Component{
  constructor(){
    super()

  }  
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.headerbar}>
        <Image style={styles.avatar} source={require('../assets/imgs/avatar1.png')} />
        <TextInput style={styles.searchpost}  placeholderTextColor={'#ce6b01'}></TextInput>
        <Image style={{marginLeft : 10}} source={require('../assets/imgs/message.png')} />
      </View>
      <ScrollView>
      <ImageBackground style={styles.background} source={require('../assets/imgs/profilebackground.png')} >
        <View style={styles.profileheader}>
          <Icon name="envelope"  size={50} color="white"/>
          <Image style={{width : 100, height : 100}} source={require('../assets/imgs/avatar1.png')} />
          <Icon name="plus"  size={50} color="white"/>
        </View>   
        <View style={{justifyContent : 'center', alignItems : 'center'}}>
          <Text style={{fontSize : 22, fontWeight : 'bold', color : 'white'}}>Luke Skywalker</Text>                                                
          <View style={{justifyContent : 'center', alignItems : 'center', flexDirection : 'row'}}>
            < Icon name="location"  size={20} color="white"/>
            <Text style={{fontSize : 18, color : 'white'}}>Tatooine</Text>                                                
          </View>
        </View>  
        <View style={styles.profilefooter}>
          <View style={styles.profilefootercontent}> 
            <Text style={{fontSize : 24, fontWeight : 'bold', color : 'white', marginTop : 10}}>1452</Text>
            <Text style={{fontSize : 16,  color : 'white'}}>Following</Text>
          </View>
          <View style={styles.profilefootercontent}> 
            <Text style={{fontSize : 24, fontWeight : 'bold', color : 'white', marginTop : 10}}>3568</Text>
            <Text style={{fontSize : 16,  color : 'white'}}>Following</Text>
          </View>
          <View style={styles.profilefooterendcontent}> 
            <Text style={{fontSize : 24, fontWeight : 'bold', color : 'white', marginTop : 10}}>154</Text>
            <Text style={{fontSize : 16,  color : 'white'}}>Post</Text>
          </View>                    
        </View>  
              
      </ImageBackground >
      <View style={{flexDirection : 'row', width : '100%'}}>
        <View style={styles.postimg}>
          <Image  source={require('../assets/imgs/post.png')} />
        </View>
        <View style={styles.posttitle}>
          <Text style={{fontSize : 18}}>Post Title</Text>
        </View>        
      </View>
      <View style={{flexDirection : 'row', width : '100%'}}>
        <View style={styles.postimg}>
          <Image  source={require('../assets/imgs/post.png')} />
        </View>
        <View style={styles.posttitle}>
          <Text style={{fontSize : 18}}>Post Title</Text>
        </View>        
      </View>
      <View style={{flexDirection : 'row', width : '100%'}}>
        <View style={styles.postimg}>
          <Image  source={require('../assets/imgs/post.png')} />
        </View>
        <View style={styles.posttitle}>
          <Text style={{fontSize : 18}}>Post Title</Text>
        </View>        
      </View>
      <View style={{flexDirection : 'row', width : '100%'}}>
        <View style={styles.postimg}>
          <Image  source={require('../assets/imgs/post.png')} />
        </View>
        <View style={styles.posttitle}>
          <Text style={{fontSize : 18}}>Post Title</Text>
        </View>        
      </View>
      <View style={{flexDirection : 'row', width : '100%'}}>
        <View style={styles.postimg}>
          <Image  source={require('../assets/imgs/post.png')} />
        </View>
        <View style={styles.posttitle}>
          <Text style={{fontSize : 18}}>Post Title</Text>
        </View>        
      </View>
      <View style={{flexDirection : 'row', width : '100%'}}>
        <View style={styles.postimg}>
          <Image  source={require('../assets/imgs/post.png')} />
        </View>
        <View style={styles.posttitle}>
          <Text style={{fontSize : 18}}>Post Title</Text>
        </View>        
      </View>
      <View style={{flexDirection : 'row', width : '100%'}}>
        <View style={styles.postimg}>
          <Image  source={require('../assets/imgs/post.png')} />
        </View>
        <View style={styles.posttitle}>
          <Text style={{fontSize : 18}}>Post Title</Text>
        </View>        
      </View>
      <View style={{flexDirection : 'row', width : '100%'}}>
        <View style={styles.postimg}>
          <Image  source={require('../assets/imgs/post.png')} />
        </View>
        <View style={styles.posttitle}>
          <Text style={{fontSize : 18}}>Post Title</Text>
        </View>        
      </View>                              



      </ScrollView>

      <View style={styles.tab}>
        <View style={styles.tab_detail}>
          <Image style={{width : 40, height : 40}} source={require('../assets/imgs/tab_home.png')} />
          <Text>Home</Text>
        </View>
        <View style={styles.tab_detail}>
          <Image style={{width : 40, height : 40}} source={require('../assets/imgs/tab_home2.png')} />
          <Text>Group Talk</Text>
        </View>        
        <View style={styles.tab_detail}>
          <Image style={{width : 40, height : 40}} source={require('../assets/imgs/tab_home3.png')} />
          <Text>Sales Coupons</Text>
        </View>
        <View style={styles.tab_detail}>
          <Image style={{width : 40, height : 40}} source={require('../assets/imgs/tab_home4.png')} />
          <Text>Notification</Text>
        </View>        
        <View style={styles.tab_detail}>
          <Image style={{width : 40, height : 40}} source={require('../assets/imgs/tab_home5.png')} />
          <Text>More</Text>
        </View>        
      </View>
      </SafeAreaView>
    );
  }  
}
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : screenWidth ,
    
  },
  background : {
    width : screenWidth,
    height :screenHeight/3,
    flex : 1
  },
  profileheader : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-around',
    width : screenWidth,
    height : screenHeight /8,
    marginTop : 20
  },
  profilefooter : {
    flexDirection : 'row',
    alignItems : 'flex-start',
    justifyContent : 'space-around',
    width : screenWidth - 40,
    margin : 20,
    height : screenHeight /10,
    borderTopWidth : 1,
    borderColor : 'white'

  },
  profilefootercontent : {
    alignItems : 'center',
    justifyContent : 'center',
    borderColor : 'white',
    borderRightWidth : 1,
    width : '33%'

  },
  profilefooterendcontent : {
    alignItems : 'center',
    justifyContent : 'center',
    borderColor : 'white',
    width : '33%'

  },
  posttitle : {
    borderWidth : 0.5,
    alignItems : 'center',
    justifyContent : 'center',

    width : '80%'
  },
  postimg : {
    borderWidth : 0.5,
    alignItems : 'center',
    justifyContent : 'center',

    width : '20%'
  },
  headerbar : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    width : screenWidth,
    height :screenHeight/10,
    backgroundColor : '#ce6b01'
  },
  avatar : {
    width : 50,
    height : 50
  },
  searchpost : {
    width : screenWidth - 150,
    height : 40,
    borderRadius : 10,
    marginLeft : 10,
    backgroundColor : '#e4e4e4'
  }  ,
  tab : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    width : screenWidth,
    height :screenHeight/12,
    backgroundColor : '#ce6b01'
  } ,
  tab_detail : {
    alignItems : 'center',
    justifyContent : 'center',
    margin : 10
  } 

});