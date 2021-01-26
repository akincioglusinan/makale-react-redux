import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
//import {addArticle, removeArticle, editArticle} from './actions/articles'
import 'bootstrap/dist/css/bootstrap.min.css';

const store=configureStore();


// () kullanınca return yazmaya gerek kalmıyor




// store.subscribe(() => {
//   console.log(store.getState());
// })
// const blog1=store.dispatch(addArticle({title: 'title 1',description: 'blog description 1'}))
// const blog2=store.dispatch(addArticle({title: 'title 2', description: 'blog description 2', dateAdded: Date.now()}))
// const blog3=store.dispatch(addArticle({title: 'title 3',description: 'blog description 1'}))
// const blog4=store.dispatch(addArticle({title: 'title 4',description: 'blog description 1'}))
// //store.dispatch(removeArticle({id: blog1.article.id}))
//store.dispatch(editArticle(blog2.article.id, {title:'updated blog title', description:'updated description'}))

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root')
);
//Increament, decrement, reset => actions(object)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
