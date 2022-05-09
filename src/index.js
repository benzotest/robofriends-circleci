import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
import App from './App.js';
import 'tachyons';

import {searchRobotsReducer, requestRobotsReducer } from './redux/reducers.js';

const logger = createLogger();
const rootReducer = combineReducers({searchRobotsReducer, requestRobotsReducer});
const store = 
createStore(rootReducer, applyMiddleware(thunk,logger))

ReactDOM.render(
    <div>
      <Provider store = {store}>
        <App />
      </Provider>
     </div>,
  document.getElementById('root')
);


