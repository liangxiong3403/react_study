import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

// 订阅store
store.subscribe(() => {
  console.log("state has been changed");
  console.log(store.getState());
});

store.dispatch({
  type: "ADD_POST",
  post: "我的第一篇博客"
});

store.dispatch({
  type: "ADD_TODO",
  todo: "吃饭"
});

store.dispatch({
  type: "ADD_TODO",
  todo: "睡觉"
});
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
