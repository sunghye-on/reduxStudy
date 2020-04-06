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



## src/components폴더

* store에 직접 직접 접근하지 않고 props로만 값을 받아온다. 보통 ui를 제작하는 부분이다.

### Counter.js

```javascript
import React from "react";
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value), 10);
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;

```



## src/containers폴더

*  리덕스의 있는 상태를 조회하거나 액션을 디스패치할 수 있는 컴포넌트를 의미한다

### CounterContainer.js

```javascript
import React from "react";
import Counter from "../components/Counter";
//상태를 조회하기위한 useSelector   dispatch를 위함
import { useSelector, useDispatch } from "react-redux";
//액션 생성함수를 불러와서 디스패치함
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
  //useSelector를이용해서 해당 state의 값들을 객체향태로 얻어 낸뒤 비구조 할당으로 값을 바로 조회가능하도록만듬
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));
  const dispatch = useDispatch();

  //미리 만들어 놓은 액션생성 함수를 이용하여 디스패치
  // 호출되면 액션 객체가 만들어진다.
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  //이제 위에서 작업한 내용들을 Conter에 하나하나 잔달하면된다.
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;

```



## App.js

* 우리가 만든 Container를 렌더링하자

```javascript
import React from "react";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return <CounterContainer />;
}

export default App;

```

