
import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
         title="Sign Up"
         onPress={() => this.props.navigation.navigate("Signup")}
       />
       <Button
         title="Login"
         onPress={() => this.props.navigation.navigate("Login")}
       />

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
});
