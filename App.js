import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';


export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAeiQTWcuydOe4gx4iXHMn2G7Fynd2i2xs',
      authDomain: 'manager-806fd.firebaseapp.com',
      databaseURL: 'https://manager-806fd.firebaseio.com',
      projectId: 'manager-806fd',
      storageBucket: 'manager-806fd.appspot.com',
      messagingSenderId: '239449481770'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
