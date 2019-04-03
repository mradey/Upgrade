import React, {Component} from 'react';
import{  AppRegistry,  StyleSheet,  Text,  View,  TouchableHighlight,  Button}from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, createBottomTabNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import MapView from 'react-native-maps';

class Upgrade extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
      Welcome to UpGrade
      </Text>
      
      </View>
    );
  }
}

class Map extends React.Component{
  render() {
    return (
      <View style={styles.container}>
            <MapView
        style={styles.map}
        region={{
          latitude: 40.006168,
          longitude: -83.0192166,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
      />

      </View>
    );
  }
}

class TutorScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Request a Tutor page</Text>
      </View>
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Profile!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
map: {
position: 'absolute',
top:0,
left: 0,
bottom: 0,
right: 0
},
});


class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}
const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={0} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if(routeName === 'Home') {
     iconName = `ios-home`;
     IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Tutor') {
     iconName = `ios-school`;
  } else if (routeName === 'Map') {
    iconName = 'ios-map';
  } else if (routeName === 'Profile') {
    iconName ='ios-person-add';
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};


const TabNavigator = createBottomTabNavigator({
  Home: Upgrade,
  Tutor: TutorScreen,
});

export default createAppContainer(createBottomTabNavigator(
  {
  Home: { screen: Upgrade },
  Tutor: { screen: TutorScreen },
  Map: {screen: Map},
  Profile: {screen: Profile},
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
  }),
  tabBarOptions: {
    activeTintColor: '#e1665c',
    inactiveTintColor: 'gray',
  },
}
), MapView,
);











