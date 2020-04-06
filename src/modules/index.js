//Root reducer를 만들기 위한 index.js

//Root reducer를 만들때는 combineReducers함수를 사용
import { combineReducers } from "redux";
//그 외 우리가 만든 각각위 리듀서들을 import
import counter from "./counter";
import todos from "./todos";

//Root Reducer생성
const rootReducer = combineReducers({
  counter,
  todos,
});
//내보내기
export default rootReducer;
