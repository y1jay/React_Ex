import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
export default class Setting extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title:'',
      date:new Date(),
    }
  }


  render() {
    return (
    <View  style={styles.container}>
        <TouchableOpacity style={styles.background}
        activeOpacity={1}
        // TouchableOpacity를 눌렀을 때 깜빡이는 효과가 있는데 이를 해제해주는 옵션
        // onPress추가
        // 모달창의 바깥영역을 터치하면 모달창이닫힘
        onPress={this.props.modalHandler}/>
        <View style={styles.modal}>
          <Text style={styles.titleText}>설정</Text>
          <TextInput
          style={styles.ddayInput}
          value={this.state.title}
          onChangeText={(changedText)=>{this.setState({title:changedText})}}
          placeholder={"디데이 제목을 입력해주세요."}/>
          <DatePicker
          date={this.state.date}
          mode="date"/>
          <TouchableOpacity>
            <Text style={styles.doneText}>
              완료
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent'
      },
      background: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        // a의 값은 0.5를 줘서 뒤의 배경이 비치게 해준다 
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      ddayInput: {
        backgroundColor: 'white',
        marginBottom: 20,
        width: '75%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#a5a5a5'
      },
      modal: {
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: '50%',
        backgroundColor: 'white',
      },
      doneText: {
        color: 'rgb(1,123,255)',
        fontSize: 15,
        margin: 10
      },
      titleText: {
        fontSize: 18,
        margin: 10
      }
});