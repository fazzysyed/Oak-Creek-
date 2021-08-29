import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    state = {
      firstLaunch: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Main');
    }, 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../src/Assets/splash.png')}
          style={styles.image}
          resizeMode="center"
        />
      </View>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: 200,
    height,
  },
});
