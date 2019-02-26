import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';
import firebase from 'firebase';


const Form = t.form.Form;

var Gender = t.enums({
  Male: 'Male',
  Female: 'Female'
});

const User = t.struct({
  email: t.String,
  name: t.String,
  surname: t.String,
  gender: Gender,
  birthDate: t.Date,
  password: t.String,
  terms: t.Boolean
});

const options = {
  fields: {
    email: {
      error: 'Enter a valid email address'
    },
    password: {
      error: 'Password is required'
    },
    terms: {
      label: 'Agree to Terms',
      error: 'Agree to Terms'
    },
    name: {
      label: 'First name',
      error: 'Full name is required'
    },
    surname: {
      label: 'Surname',
      error: 'Surname is required'
    },
    birthDate: {
      mode: 'date'
    }
  },
  stylesheet: formStyles,
};

export default class App extends Component {

  state = { error : ''};
  
  handleSignUp  = () => {
    this.setState({error: ''});
    const value = this._form.getValue();
    console.log('value: ', value);
    const {
      email, 
      name, 
      surname, 
      gender, 
      birthDate,
      password,
      terms
    } = value;

    const userBirthDate = new Date(birthDate).getTime();
    console.log("userTimeStampBirthDate", userBirthDate);
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => {
      console.log('response: ', response);
      const {currentUser} = firebase.auth();
      firebase.database().ref(`/users/${currentUser.uid}/userDetails`)
      .push({
        email,
        name,
        surname,
        gender,
        birthDate: userBirthDate,
        password,
        terms
      })
      this.props.navigation.navigate("Home");
    })
    .catch(err => {
      console.log('error: ', err);
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
        <TouchableHighlight style={styles.button} onPress={this.handleSignUp.bind(this)} underlayColor='#99d9f4'>
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