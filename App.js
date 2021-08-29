/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  Text,
  StatusBar,
  Dimensions,
  BackHandler,
  Platform,
} from 'react-native';
import WebView from './src/Webview';
import WebViewIos from './src/WebViewIos';
import Splash from './src/Splash';
import Main from './src/Main';
import Blog from './src/Blog';
import Contact from './src/Contact';
import About from './src/About';
import Notices from './src/Notices';
import Event from './src/Events';
import Location from './src/Location';
import Magazine from './src/Magazine';

const STACK = createStackNavigator();
function MyStack() {
  return (
    <STACK.Navigator>
      {Platform.OS === 'ios' ? (
        <>
          <STACK.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Webview"
            component={WebViewIos}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="About"
            component={About}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Blog"
            component={Blog}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Contact"
            component={Contact}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Event"
            component={Event}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Notices"
            component={Notices}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Magazine"
            component={Magazine}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Location"
            component={Location}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <STACK.Screen
          name="Webios"
          component={WebViewIos}
          options={{headerShown: false}}
        />
      )}
    </STACK.Navigator>
  );
}

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

export default App;
