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
  } from 'react-native';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import Expo from 'expo';

import CreateAcc from './components/CreateAcc';


class LandingPage extends React.Component {
  
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style = {{flex: 1, alignItems: 'center'}}>

        <View style={styles.rectangle1}>
          <Image source={require('./img/upgrade.JPG')}
          style={{flex:1, width: '100%' }} />
        </View>

        <View style={styles.introText}>
          <Text style = {{fontSize: 12}}>Study Smarter, Not Harder</Text>
        </View>

        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center', padding: '10%'}}>
          <TouchableOpacity style={{height: '80%', alignItems: 'center'}}>
            <Text style={styles.createAccount} 
              onPress={ ()=> navigate('CreateAccount')}>Create Account/</Text>

          </TouchableOpacity>
          <TouchableOpacity style={{height: '90%', alignItems: 'center'}}>
            <Text style = {styles.login}> login </Text>
          </TouchableOpacity>
        </View>



      </View>
    );
  }
}

const AppSwitchNavigator = createStackNavigator({
  Landing: {screen: LandingPage},
  CreateAccount: {screen: CreateAcc},
},{
  
});


export default createAppContainer(AppSwitchNavigator);


const styles = StyleSheet.create({

  introText: {
    height: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rectangle1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '30%',
    borderColor: '#707070',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#e1665c',
  },

  createAccount:{
    fontFamily: 'Times New Roman',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: '90%',
    borderRadius: 20,
    borderColor: '#e1665c',
    padding: 20,
    paddingHorizontal: '20%',
    backgroundColor: '#e1665c',
    
  },

  login:{
    fontFamily: 'Times New Roman',
    color: '#e1665c',
    fontSize: 25,
    fontWeight: 'bold',
  },


});


