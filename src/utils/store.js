/**
 * Created by enpire on 07/05/2017.
 */
import {createStore} from 'redux';
import {autoRehydrate} from 'redux-persist';


export function getStore(reducer) {
  if (__DEV__) {
    return createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      autoRehydrate(),
    );
  }
  else {
    return createStore(
      reducer,
      undefined,
      autoRehydrate(),
    );
  }
}