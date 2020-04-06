import { createStore } from "redux";

//초기 상태 지정
const initState = {
  counter: 0,
  text: "",
  list: [],
};

//액션 타입들을 정의
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

//액션을 만들어주는 액션 생성함수 정의
const increase = () => ({
  type: INCREASE,
});
const decrease = () => ({
  type: DECREASE,
});
const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});
const addToList = (data) => ({
  type: ADD_TO_LIST,
  data,
});

// reducer를 생성
function reducer(state = initState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.data),
      };
    default:
      return state;
  }
}

// createStore를 호출하고 그안에 우리가 만든 reducer를 넣어 store를 생성한다.
const store = createStore(reducer);
//store의 현재 상태를 불러오는 함수로 확인 가능
console.log(store.getState());
//store의 구독을 위한 리스너 함수생성
const listener = () => {
  const state = store.getState();
  console.log(state);
};
// 구독함수를 생성하고 그안에 리스너 함수를 넣는다.
const unsubscribe = store.subscribe(listener);
//나중에 구독을 해제하고 싶으면 unsubscribe함수를 호출해주면 된다.

//구독한 스토어의 특정액션을 실행해주기위한 디스패치
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(addToList({ id: 1, text: "올호" }));
store.dispatch(changeText("하이하이"));
