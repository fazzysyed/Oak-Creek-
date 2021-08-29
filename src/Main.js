import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  Animated,
} from 'react-native';

export default class Main extends Component {
  toggle = (path) => {
    if (path === 'first') {
      this.props.navigation.navigate('Webview');
    }
    if (path === 'second') {
      this.props.navigation.navigate('About');
    }
    if (path === 'three') {
      this.props.navigation.navigate('Blog');
    }
    if (path === 'four') {
      this.props.navigation.navigate('Contact');
    }
    if (path === 'five') {
      this.props.navigation.navigate('Event');
    }
    if (path === 'six') {
      this.props.navigation.navigate('Notices');
    }
    if (path === 'seven') {
      this.props.navigation.navigate('Magazine');
    }
    if (path === 'eight') {
      this.props.navigation.navigate('Location');
    }
  };
  render() {
    return (
      <ImageBackground
        source={require('../src/Assets/bgd.jpg')}
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 10,
              marginTop: 40,
            }}>
            <TouchableOpacity
              style={[styles.card, {borderColor: '#FFFFFF'}]}
              onPress={() => this.toggle('first')}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/home.png')}
                  style={{
                    height: 50,
                    width: 50,
                    marginVertical: 5,

                    shadowColor: '#000',
                  }}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.text}>Website</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.toggle('second')}
              style={[styles.card, {borderColor: '#FFFFFF'}]}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/about.png')}
                  style={{
                    height: 50,
                    width: 50,
                    marginVertical: 5,
                    shadowColor: '#000',
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>About Us</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => this.toggle('three')}
              style={[styles.card, {borderColor: '#FFFFFF'}]}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/news.png')}
                  style={{
                    height: 50,
                    width: 50,
                    marginVertical: 5,

                    shadowColor: '#000',
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.toggle('four')}
              style={[styles.card, {borderColor: '#FFFFFF'}]}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/phone.png')}
                  style={{
                    height: 50,
                    width: 50,
                    shadowColor: '#000',
                    marginVertical: 5,
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>Contact us</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => this.toggle('five')}
              style={[styles.card, {borderColor: '#FFFFFF'}]}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/event.png')}
                  style={{
                    marginVertical: 5,
                    height: 50,
                    width: 50,
                    shadowColor: '#000',
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.toggle('six')}
              style={[styles.card, {borderColor: '#FFFFFF'}]}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/noticeboard.png')}
                  style={{
                    height: 50,
                    width: 50,
                    shadowColor: '#000',
                    marginVertical: 5,
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>Notices</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => this.toggle('seven')}
              style={[styles.card, {borderColor: '#FFFFFF'}]}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/event.png')}
                  style={{
                    marginVertical: 5,
                    height: 50,
                    width: 50,
                    shadowColor: '#000',
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>Magazine</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.toggle('eight')}
              style={[styles.card, {borderColor: '#FFFFFF'}]}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={require('../src/Assets/empty.png')}
                  style={{
                    height: 50,
                    width: 50,
                    shadowColor: '#000',
                    marginVertical: 5,
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}>Directory</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    width: 120,
    height: 120,

    shadowOpacity: 0.6,
    marginBottom: 20,
    borderRadius: 6,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
