# redux Study

## src/modules폴더

### 액션 타입 선언

* const TYPE_NAME = "modulename/TYPE_NAME";

### 액션 생성함수 선언

```javascript
export const typeName = (param) =>({
    type: TYPE_NAME,
    actionData,
})
```

### 초기상태 선언

* const initState = []
* const initState= {}

### 리듀서 작성(객체)

```javascript
function reducer(state = initState, action){
    switch(action.type){
        case TYPENAME:
            return {
                ...state,
                data: state.data + 1,
            }
        case TYPENAME:
            return {
                ...state,
            }
        default:
            return state;
    }
}
```

### 리듀서 작성(배열)

```javascript
function reducer(state = initState, action){
    switch(action.type){
        case TYPENAME:
            return state.concat(action.data)
        case TYPENAME:
            return state.map(
                (data)=>data.id === action.id
                ? console.log("data.id와 action.id는 같다");
                : console.log("data.id와 action.id가 다르다");
                            )
        default:
            return state;
    }
}
```



### RootReducer생성

* 두개 이상의 모듈이 있을경우 rootReducer가 필요

```javascript
import { combineReducers } from "redux"
import moduleA from "./moduleA";
import moduleB from "./moduleB";
//Root Reducer생성
const rootReducer = combineReducers({
  moduleA,
  moduleB,
});
```



## create-react-app의 index.js

### 리액트와 리덕스를 연결하기 위한 Provider

* import { Provider } from "react-redux";

### RootReducer import

### store만들기

* const store = createStore(rootReducer);
* 확인을 위해서 consloe.log(store.getState()) 

### Provider적용

```js
ReactDOM.render(
  //<APP />를 아래와 같이 Provider러 감싼뒤 store를 지정해주면 페이지 어디서나 store를 사용할 수 있다.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

