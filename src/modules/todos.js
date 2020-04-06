//투두의 액션 타입 지정
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
//투두의 아이디값을 미리선언
let nextId = 1;
// 투두의 액션 생성함수 생성
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

//초기 state를 빈 배열을 생성
//나중에는 빈배열에 내용을 객체로 넣을것
const initState = [
  // 나중에는 이런식으로 데이터가 들어갈 예정이다.
  //   {
  //     id: 1,
  //     todo: "예시",
  //     done: "false",
  //   },
];

//투두의 리듀서 작성
export default function Todos(state = initState, action) {
  //state가 배열인 경우 간단히concat을 이용하면된다
  switch (action.type) {
    case ADD_TODO:
      //액션 생성함수에서 받아온 todo를 추가해줌
      return state.concat(action.todo);
    case TOGGLE_TODO:
      // 배열의 map 함수를 이용하여 요소들을 검사한뒤 todo의id가 action으로 받아온 id와 동일하면 done을 반전시키고 아니라면 그냥둔다
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
