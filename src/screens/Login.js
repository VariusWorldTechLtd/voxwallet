import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';
import firebase from 'firebase';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
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
  
    state = { error : ''};

  handleLogin = () => {
    this.setState({error: ''});
    const value = this._form.getValue();
    console.log('value: ', value);
    const {email, password} = value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      this.props.navigation.navigate("Home");
    })
    .catch(() => {
        this.setState({error: 'Authentication failed'});
    })
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={formStyles.error}>{this.state.error}</Text>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this.handleLogin.bind(this)}>
          <Text style={styles.buttonText}>Login</Text>
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