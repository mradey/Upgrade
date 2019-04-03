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

  export default class Home extends React.Component{
    render() {
    
    return (
      
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 40.0036,
            longitude: -83.0169,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}

        >
       
        <MapView.Marker
            coordinate={{latitude: 39.9992,
            longitude: -83.0149}}
            title={"Juhee Park"}
            description={"Thompson Library"}
         />

         <MapView.Marker
            coordinate={{latitude: 39.9977,
            longitude: -83.0086}}
            title={"Jake Imyak"}
            description={"Ohio Union"}
         />

         <MapView.Marker
            coordinate={{latitude: 40.0067,
            longitude: -83.0177}}
            title={"Mayen McClain"}
            description={"Panera"}
         />

         <MapView.Marker
            coordinate={{latitude: 39.9995,
            longitude: -83.0127}}
            title={"Patrick Yang"}
            description={"The Oval"}
         />

         <MapView.Marker
            coordinate={{latitude: 40.0016,
            longitude: -83.0133}}
            title={"Isaac Norman"}
            description={"18th Avenue Library"}
         />

         </MapView>

         
      
      </View>
    );
  }
  
  