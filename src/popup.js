// declare var chrome: any;
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import Popup from './popup/Popup'
// import defaultState from './defaults'
// import 'semantic-ui-css/semantic.css'
// import './popup/index.css'
// import { AppState } from './types'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './containers/App';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(rootReducer);

// chrome.storage.local.get((storedState) => {
//   console.log('* storedState:', storedState);
//   const initialState = {};

//   chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
//     const [activeTab] = tabs;
//     ReactDOM.render(
//       <Provider store={store}>
//         <div>hello</div>
//       </Provider>,
//       document.getElementById('root')
//     );
//   });
// });

// chrome.commands.getAll((commands) => {
//   console.log('* commands:', commands);
//   const initialState = {};

//   chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
//     const [activeTab] = tabs;
//     ReactDOM.render(
//       <Provider store={store}>
//         <div>hello</div>
//       </Provider>,
//       document.getElementById('root')
//     );
//   });
// });


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);