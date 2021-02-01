import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import articlesReducer from '../reducers/articles';
import authReducer from '../reducers/auth';
import authMessage from '../reducers/authmessage'
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore=() => {
  const store = createStore(
    combineReducers({
      articles: articlesReducer,
      auth: authReducer,
      authMessage
    }), composeWithDevTools(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
export default configureStore