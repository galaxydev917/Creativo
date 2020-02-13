
import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions ,
  Image,
  ScrollView, 
  TextInput,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Dialog, {  DialogContent } from 'react-native-popup-dialog';import Timeline from 'react-native-timeline-flatlist';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HomePage extends Component{
  constructor(){
    super()
    this.onEventPress = this.onEventPress.bind(this)
    this.renderSelected = this.renderSelected.bind(this)
    this.renderDetail = this.renderDetail.bind(this)

    this.data = [
      {
        description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor:'#009688', 
         icon: require('../assets/imgs/timeicon.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg',
        type : 1
      },
      {
        description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.', 
        icon: require('../assets/imgs/timeicon.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg',
        type : 2
      },
      {
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        lineColor:'#009688', 
        icon: require('../assets/imgs/timeicon.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg',
        type : 2
      }
    ]
    this.state = {selected: null, popupVisible: false}
  } 

  onEventPress(data){
    this.setState({selected: data})
  }

  renderSelected(){
      if(this.state.selected)
        return <Text style={{marginTop:10}}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>
  }

  renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>
    var desc = null
    if(rowData.description && rowData.imageUrl){
      if(rowData.type == 1)
      desc = (
        
        <View>
          <Card style={styles.card}>
            <View style={styles.descriptionContainer}>   
              <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
              <View style={{height : 50, justifyContent : 'center', marginRight : screenWidth/4}}>
                <Text style={{fontSize : 16, fontWeight : '600', marginLeft: 10,}}>Amanda Morris</Text>            
                <Text style={[styles.textDescription]}>30 October 08:15 pm</Text>
              </View>
              <Image style={{width : 30, height : 30}} source={require('../assets/imgs/tag.png')} />  
            </View>
            <View style={styles.textDescription2}>
              <Text style={{fontSize : 18, fontWeight : '600', marginLeft : 10}}>Free Yarn</Text>
              <Text style={{fontSize : 18, fontWeight : '600'}}>$: Free</Text>
              <Text>    ...</Text>
            </View>
            <Text style={[styles.textDescription]}>Free collection of yarn, just need the sace!</Text>
            <Image style={styles.postimg} source={require('../assets/imgs/homeimg1.png')} /> 
            <View style={styles.postfooter}>
              <View style={styles.footercontent}>
                <Image style={{width : 20, height : 20}} source={require('../assets/imgs/like.png')} /> 
                <Text style={{color : 'gray'}}>  Like</Text>
              </View>
              <View style={styles.footercontent}>
                <Image style={{width : 20, height : 20}} source={require('../assets/imgs/comment.png')} /> 
                <Text style={{color : 'gray'}}>  Comments</Text>
              </View>   
              <View style={styles.footercontent}>
                <Image style={{width : 20, height : 20}} source={require('../assets/imgs/reply.png')} /> 
                <Text style={{color : 'gray'}}>  Reply</Text>
              </View>                          
            </View>       
          </Card>
        </View>   
    );
    if(rowData.type == 2)
        desc=(
        
          <View>
            <Card style={styles.card}>
              <View style={styles.descriptionContainer}>   
                <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
                <View style={{height : 50, justifyContent : 'center', marginRight : screenWidth/4}}>
                  <Text style={{fontSize : 16, fontWeight : '600', marginLeft: 10,}}>Mike Pence</Text>            
                  <Text style={[styles.textDescription]}>30 October 08:15 pm</Text>
                </View>
                <Image style={{width : 30, height : 30}} source={require('../assets/imgs/tag2.png')} />  
              </View>
              <View style={styles.textDescription2}>
                <Text style={{fontSize : 18, fontWeight : '600', marginLeft : 10}}>Looking for help with table making</Text>
                <Text>    ...</Text>
              </View>
              <View style={{flexDirection : 'row', width : '100%', alignItems : 'flex-end'}}>
                <View style={{width : '90%'}}>
                  <Text style={[styles.textDescription]}>Free collection of yarn, just need the sace!Free collection of yarn, just need the sace!Free collection of yarn, just need the sace!  </Text>
                </View>
                <View style={{width : '10%', }}>
                  <Icon name="plus-circle" style={{color : '#ce6b01'}} size={25}/>
                </View>
              </View>
              
              {/* <Image style={{width : 20, height : 20}} source={require('../assets/imgs/addbtn.png')} />  */}
              <View style={styles.postfooter}>
                <View style={styles.footercontent}>
                  <Image style={{width : 20, height : 20}} source={require('../assets/imgs/like.png')} /> 
                  <Text style={{color : 'gray'}}>  Like</Text>
                </View>
                <View style={styles.footercontent}>
                  <Image style={{width : 20, height : 20}} source={require('../assets/imgs/comment.png')} /> 
                  <Text style={{color : 'gray'}}>  Comments</Text>
                </View>   
                <View style={styles.footercontent}>
                  <Image style={{width : 20, height : 20}} source={require('../assets/imgs/reply.png')} /> 
                  <Text style={{color : 'gray'}}>  Reply</Text>
                </View>                          
              </View>       
            </Card>
          </View>   
      );
    }  
    
    return (
      <View style={{flex:1}}>
        {title}
        {desc}
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.headerbar}>
        <Image style={styles.avatar} source={require('../assets/imgs/avatar1.png')} />
        <TextInput style={styles.searchpost}  placeholderTextColor={'#ce6b01'}></TextInput>
        <Image style={{marginLeft : 10}} source={require('../assets/imgs/message.png')} />
      </View>
      <View style={styles.container}>
        {this.renderSelected()}
        <Timeline 
          style={styles.list}
          data={this.data}
          circleSize={10}
          circleColor='rgba(0,0,0,0)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:0}}
          // timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          innerCircle={'icon'}
          onEventPress={this.onEventPress}
          renderDetail={this.renderDetail}
        />
      </View>
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
      <Dialog
        visible={this.state.popupVisible}
      
        containerStyle={{ justifyContent: 'flex-end', borderRadius : 40}}
        dialogStyle={{backgroundColor : 'transparent'}}
        width={screenWidth}
        height={300}
        onTouchInside={() => {
        this.setState({ popupVisible: false });
        }}
        >
        <DialogContent>
          <Text>ssssss</Text>
        </DialogContent>
      </Dialog>        
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
  card : {
    width : screenWidth - 60,
    padding : 10,

  },
  list: {
    flex: 1,
    // marginTop:20,
  },
  postfooter : {
    borderTopWidth : 1,
    borderColor : 'gray',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 10,
    height : 40,
    width : screenWidth - 80
  },
  footercontent : {
    flexDirection : 'row',
    margin : 10,
    borderColor : 'gray',
    alignItems : 'center',
    justifyContent : 'center',

  },
  descriptionContainer:{
    flexDirection: 'row',
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  postimg : {
    width : screenWidth-80,
    height : screenHeight /4,
    marginTop : 10,
    borderRadius : 10
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray'
  },
  textDescription2: {
    flexDirection : 'row', 
    justifyContent : 'space-between', 
    marginTop : 10,
    width : screenWidth -100
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