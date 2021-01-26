import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import articlesReducer from '../reducers/articles';
import authReducer from '../reducers/auth';
import { composeWithDevTools } from 'redux-devtools-extension';

export default ()=>{const store = createStore(
    combineReducers({
      articles: articlesReducer,
      auth: authReducer
    }), composeWithDevTools(applyMiddleware(thunk)), 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}