import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//리액트에 리덕스를 적용하기 위한 Provider
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";
//개발자도구에서 리덕스의 상태를 조회하거나 디스패치할 수 있고 디스패치된 액션들의 내역을 학인가능해진다.
import { composeWithDevTools } from "redux-devtools-extension";

//store만들기                                 .. 두번째 파라미터값으로 넣어준다.
const store = createStore(rootReducer, composeWithDevTools());
//잘나오는지 확인
// console.log(store.getState());
ReactDOM.render(
  //<APP />를 아래와 같이 Provider러 감싼뒤 store를 지정해주면 페이지 어디서나 store를 사용할 수 있다.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
