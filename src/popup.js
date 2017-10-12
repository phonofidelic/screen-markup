// declare var chrome: any;
import React from 'react'
import ReactDOM from 'react-dom'
// import Popup from './popup/Popup'
// import defaultState from './defaults'
// import 'semantic-ui-css/semantic.css'
// import './popup/index.css'
// import { AppState } from './types'

chrome.storage.local.get((storedState) => {
  console.log('* storedState:', storedState)
  const initialState = {}

  chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    const [activeTab] = tabs
    ReactDOM.render(
      <div>hello</div>,
      document.getElementById('root')
    )
  })
})