
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
import Icon from 'react-native-vector-icons/EvilIcons';
import { SliderBox } from "react-native-image-slider-box";
import { ScrollView } from 'react-native-gesture-handler';
export default class OfferPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
        // require('./assets/images/girl.jpg'),          // Local image
      ]
    };    
    
} 
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <SliderBox 
          images={this.state.images} 
          autoplay={true}
          circleLoop={true}
          sliderBoxHeight={300}
        />
        <ScrollView>
          <View style={{margin : 30}}>
            <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
              <Text style={{fontSize : 22}}>Free Yarn</Text>
              <Icon name="chevron-down"  size={30}  />          
            </View>
            <View>
              <Text style={{color : '#ce6b19', fontSize : 20, marginLeft : 20}}>$Free</Text>
              <Text style={{marginLeft : 40}}>Amanda Morris, location</Text>          
              <Text style={{marginLeft : 40}}>(list of interests)</Text>          
            </View>
          </View>
          <Text style={{fontSize : 18, margin : 30}}>Description of item</Text>
          <Text style={{marginLeft : 30}}>when listed</Text>
          <View style={styles.buttonview}>
            <View style={styles.messageBtn}>
                <Text style={{color : 'white'}}>Message Amanda</Text>
            </View>
            <View style={styles.bookmarkBtn}>
                <Text >Bookmark</Text>
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
  container : {
    flex : 1,
    justifyContent : 'flex-end'
  },
  messageBtn : {
    backgroundColor : '#ce6b19',
    width : screenWidth /2,
    alignItems : 'center',
    justifyContent : 'center',
    margin : 20,

    height : 40
  },
  bookmarkBtn : {
    backgroundColor : '#c2c2c2',
    width : screenWidth /2,
    alignItems : 'center',
    justifyContent : 'center',

    height : 40
  },  
  buttonview : {
    alignItems : 'center',
    justifyContent : 'center'
  },
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