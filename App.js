import React from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  Platform,
  TextInput,
 } from 'react-native';

export default class App extends React.Component { render() {
return (
<View style={styles.container}>
    <Text style={[styles.largeText, styles.textStyle]}>Vancouver</Text>
    <Text style={[styles.smallText, styles.textStyle]}>Sunny</Text>
    <Text style={[styles.largeText, styles.textStyle]}>4°</Text>

    <TextInput
      autoCorrect={false}
      placeholder="Search any city" placeholderTextColor="white" style={styles.textInput} clearButtonMode="always"/>
</View> );
} }


const styles = StyleSheet.create({ container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
});
