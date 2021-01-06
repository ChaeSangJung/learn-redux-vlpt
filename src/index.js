import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from "redux";
import rootReducer from "./modules";

// store를 만듭니다.
const store = createStore(rootReducer);

// store의 상태를 확인해 봅니다.
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
