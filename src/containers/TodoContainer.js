//함수들을 매벙 렌더랑될 때마다 생성하는것이 아닌 자새용을 위한 useCallback
import React, { useCallback } from "react";
import Todos from "../components/Todos";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos";
function TodoContainer() {
  //저번에 한것과 비슷하게 todos를 할당받고 dispatch를 만들어줌
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  //아래와 같은 문법을 사용하여 useCallBack을 사용한다
  const onCreate = useCallback(
    (text) => {
      if (text === "") {
        alert("값을 입력하세요");
      } else {
        dispatch(addTodo(text));
      }
    },
    [dispatch]
  );
  //   const onToggle = (id) => dispatch(toggleTodo(id));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodoContainer;
