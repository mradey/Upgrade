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

  export default class Tutors extends React.Component{
    render(){
      return(
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text> Tutors </Text>
        </View>
      )
    }
    
  }