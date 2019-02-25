import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';
import { validate } from 'tcomb-validation';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
});

const options = {
  fields: {
    email: {
      error: 'Enter a valid email address'
    },
    password: {
      error: 'Password is required'
    },
  },
  stylesheet: formStyles,
};

export default class App extends Component {
  
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
          // value={this.state.value}
          // onChange={this.onChange}
        />
        {/* <Button
          style={styles.button}
          title="Sign Up!"
          onPress={this.handleSubmit}
        /> */}
        <TouchableHighlight style={styles.button} onPress={this.handleSignUp} underlayColor='#99d9f4' onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}