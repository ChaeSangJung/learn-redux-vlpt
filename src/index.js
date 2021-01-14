import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension'; // redux 개발자 도구

// store를 만듭니다.
const store = createStore(rootReducer, composeWithDevTools());
// composeWithDevTools를 사용하여 리덕스 개발자 도구 활성화

// store의 상태를 확인해 봅니다.
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
