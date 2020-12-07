//App.js
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground } 
from 'react-native';
import Setting from './Setting.js';

export default class App extends React.Component {
  //props는 읽기전용 데이터로 이를 이용해서 부모컴포넌트의 값을 자식컴포넌트로 전달가능
constructor(props){
  super(props);
  this.state={
    dday: new Date(),
    ddayTitle:'디데이',
    chatLog:[],
    settingModal:false,
  }
}
//세팅 톱니바퀴 버튼을 눌렀을 때, 동작할 함수
toggleSettingModal() {
  this.setState({
    settingModal: !this.state.settingModal
  })
}
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.settingView}>
          {/* onPress추가 */}
        <TouchableOpacity onPress={()=>this.toggleSettingModal()}>
          <Image source ={require('./icon/setting.png')}/>
        </TouchableOpacity>
        </View>
        <View style = {styles.ddayView}>
        <Text style = {styles.titleText}> 
          {this.state.ddayTitle}까지
        </Text>
        <Text style = {styles.ddayText}>
          D-24
        </Text>
        <Text style = {styles.dateText}>
          2020년 12월 25일
        </Text>
        </View>
        <View style = {styles.chatView}>
       <ScrollView style ={styles.chatScrollView}>

       </ScrollView>
       <View style={styles.chatControl}>
       <TextInput style={styles.chatInput}/>
       <TouchableOpacity style= {styles.sendButton}>
         <Text>
           전송
         </Text>
       </TouchableOpacity>
        </View>
        </View>
        {/* 이부분이 컴포넌트 추가  삼향연산자 */}
        { this.state.settingModal ? 
          <Setting  modalHandler={()=>this.toggleSettingModal()} />  //modalHandler props추가
          : <></> }
      </View>
    );
  }
}

// 스타일을 지정해준다 
const styles = StyleSheet.create({
  // container는 가장 상단의 감싸고있는 뷰 이기떄문에 flex : 1을 하면 화면 전체를 감싼다.
   container: {
     flex : 1
   },
   settingView: {
     flex:1,
     paddingTop:40,
     backgroundColor: 'red',
     alignItems:'flex-end',
     marginRight:'1%'
   },
   ddayView:{
     flex:6,
     backgroundColor:'#2f9d27',
     justifyContent:'center',
     alignItems:'center',
     
    //  flexDirection:'row'    < 가로정렬 
   },
   chatView:{
     flex:6,
     backgroundColor:'#2f9d27',
   },
   titleText:{
     alignSelf:'flex-end',
     fontWeight:'bold',
     fontSize:36,
     marginRight:'15%',
     marginBottom:'7%'
   },
   ddayText:{
   fontSize:100,
   fontWeight:'bold',
   color:'red'
   },
   dateText:{
     alignSelf:'flex-start',
     fontSize: 21,
     fontWeight:'bold',
     marginLeft:'15%',
     marginTop:'7%' 
   },
   sendButton:{
     backgroundColor:'#ff007f',
     width:50,
     height:40,
     borderRadius:20,
     justifyContent:'center',
     padding:5,
     alignItems:'center',
     marginLeft:5
 
   },
   chatInput:{
     backgroundColor:'white',
     width:'75%',
     height:40,
     borderRadius:20,
     borderWidth:1,
   },
   chatControl:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     marginBottom:15
   },
   chatScrollView:{
     width:'90%',
     alignSelf:'center',
     // rgba는 alpha값을 받아서 투명한 색을 만들어준다
     backgroundColor:'rgba(201,201,201,0.7)',
     borderRadius:5,
     borderWidth:1,
     borderColor:'#a5a5a5',
     marginBottom:15
   }

});