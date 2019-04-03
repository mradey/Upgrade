import React from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  Button,
  TextInput,
  Keyboard,
  Platform,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,

  } from 'react-native';

  import CreateAcc from './CreateAcc';

  export default class Profile extends React.Component{
    render(){
      return(
        <View style = {{flex: 1,}}>
          <View style = {styles.pic} />
          <View style = {{top: 10, left: 80}}>
            <Text> Name </Text>
          </View>
          
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    pic: {
      position: 'absolute',
      top: 10,
      left: 10,
      width: 125,
      height: 125,
      borderRadius: 125/2,
      borderColor: '#e1665c',
      borderStyle: 'solid',
      borderWidth: 2,
  },
    
  });