import React, {Component} from 'react';
import {combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';

import {getStore} from './utils/store';
import * as reducers from './reducers';
import Main from './components/Main';

const reducer = combineReducers(reducers);
const store = getStore(reducer);
persistStore(store);

export default class App extends Component {

  render() {
    return (
      <div>
        <Provider store={store}>
          <Main/>
        </Provider>
      </div>
    );
  }
}
