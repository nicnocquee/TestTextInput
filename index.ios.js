/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

const { State: TextInputState } = TextInput

class TestTextInput extends Component {
  constructor (props) {
    super(props)
  }

  onTapBackground () {
    TextInputState.blurTextInput(TextInputState.currentlyFocusedField())
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={1} style={{flexDirection: 'column', flex: 1}} onPress={this.onTapBackground.bind(this)}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <Text style={styles.instructions} onLayout={(e) => {console.log('This is called')}}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <TextInput
              ref="textInput"
              onLayout={(e) => {
                console.log('--- this is not called?')
              }}
              style={{height: 44, color: 'black', borderColor: 'black', borderWidth: 1, paddingHorizontal: 10, marginHorizontal: 10}}
              placeholder='text here'
              text={'cool'}
              placeholderTextColor={'rgba(0,0,0,.4)'}
              underlineColorAndroid='rgba(0,0,0,0)'
            />
        </View>
      </TouchableOpacity>

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestTextInput', () => TestTextInput);
