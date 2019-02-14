import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

const config = {  
    apiKey: "AIzaSyCQFJ7avdBmx-o7kcnl-Xev7XvBpCeWE3E",
    authDomain: "elm-web-eng.firebaseapp.com",
    databaseURL: "https://elm-web-eng.firebaseio.com",
    projectId: "elm-web-eng",
    storageBucket: "elm-web-eng.appspot.com",
    messagingSenderId: "323861359653"
};

const db = firebase  
  .initializeApp(config)
  .database()
  .ref()

// console.log(db)

// Added some "action" functions
// These will update our firebase database
const addLocation = data => { db.child('locations').push(data, response => response); }
const updateLocation = (id, data) => { db.child(`locations/${id}`).update(data, response => response); }
const actions = {  
  addLocation,
  updateLocation,
};

db.on('value', snapshot => {
  const store = snapshot.val();
  ReactDOM.render(
    <App
        {...actions}
        {...store}
    />,
    document.getElementById('root')
  );
});

export default actions;
