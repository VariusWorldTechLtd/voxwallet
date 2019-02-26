
import React, {Component} from 'react';
import AppNavigator from './src/AppNavigator';
import firebase from 'firebase';
import {API_KEY, AUTH_DOMAIN, DATABASE_URL,
  PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID} from './constants';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID
    });
  }

  render() {
    return (
      <AppNavigator/>
    );
  }
}
