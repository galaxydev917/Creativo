
import React, {Component} from 'react';
import {
  Platform,
  SafeAreaView,
  Dimensions ,
  StatusBar,
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
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from '../components/SliderEntry';
import styles, { colors } from '../styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../static/entries';
import { scrollInterpolators, animatedStyles } from '../utils/animations';
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

export default class WalkthroughPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  } 
  _renderItem ({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
}

_renderItemWithParallax ({item, index}, parallaxProps) {
    return (
        <SliderEntry
          data={item}
          even={(index + 1) % 2 === 0}
          parallax={true}
          parallaxProps={parallaxProps}
        />
    );
}



mainExample (number, title) {
    const { slider1ActiveSlide } = this.state;

    return (
        <View style={styles.exampleContainer}>
            <Text style={styles.title}>{`Walkthrough`}</Text>
            <Text style={styles.subtitle}>{title}</Text>
            <Carousel
              ref={c => this._slider1Ref = c}
              data={ENTRIES1}
              renderItem={this._renderItemWithParallax}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              firstItem={SLIDER_1_FIRST_ITEM}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              // inactiveSlideShift={20}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              loop={true}
              loopClonesPerSide={2}
              autoplay={true}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
            />
            <Pagination
              dotsLength={ENTRIES1.length}
              activeDotIndex={slider1ActiveSlide}
              containerStyle={styles.paginationContainer}
              dotColor={'rgba(255, 255, 255, 0.92)'}
              dotStyle={styles.paginationDot}
              inactiveDotColor={colors.black}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this._slider1Ref}
              tappableDots={!!this._slider1Ref}
            />

        </View>
    );
  }  
  render(){
    const example1 = this.mainExample(1, '');
    return (
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground  style={{width: screenWidth, height: screenHeight}} source={require('../assets/imgs/background.png')} >
         

        { example1 }
        <View style={{justifyContent : 'center', alignItems : 'center'}}>
            <View style={{justifyContent : 'center', alignItems : 'center', borderColor : 'white', borderWidth : 1, width : 200, height : 50, borderRadius : 20}}>
              <Text style={{color:'white', fontSize: 18, fontWeight : '500'}}>Skip</Text>
            </View>
          </View>         
        </ImageBackground>

      </SafeAreaView>
    );
  }
}
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

// const styles = StyleSheet.create({
//   container : {
//     flex : 1,
//     justifyContent : 'flex-end'
//   },
//   messageBtn : {
//     backgroundColor : '#ce6b19',
//     width : screenWidth /2,
//     alignItems : 'center',
//     justifyContent : 'center',
//     margin : 20,

//     height : 40
//   },
//   bookmarkBtn : {
//     backgroundColor : '#c2c2c2',
//     width : screenWidth /2,
//     alignItems : 'center',
//     justifyContent : 'center',

//     height : 40
//   },  
//   buttonview : {
//     alignItems : 'center',
//     justifyContent : 'center'
//   },
//   tab : {
//     flexDirection : 'row',
//     alignItems : 'center',
//     justifyContent : 'center',
//     width : screenWidth,
//     height :screenHeight/12,
//     backgroundColor : '#ce6b01'
//   } ,
//   tab_detail : {
//     alignItems : 'center',
//     justifyContent : 'center',
//     margin : 10
//   } 

// });