import React, { useState } from "react";

//Todo를 보여주는 컴포넌트
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{
        textDecoration: todo.done ? "line-through" : "none",
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

//Todo들의 리스트를 보여주는 컴포넌트
const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

//새로운 todo를 생성하기 위한 컴포넌트
function Todos({ todos, onCreate, onToggle }) {
  //모든 상태정본를 리덕스에서 관리하는 것은 아님
  //필요에 따라 컴포넌트 내부에서 useState로 사용가능
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    //default로 새로고침이되는데 이것을 적으면 새로고침이 되지 않는다.
    e.preventDefault();
    //새로고침을 안하는대신 받아온 props로 onCreate을 호출하여 렌더링
    onCreate(text);
    //onCreate함수 호출이후에는 다시 text를 초기화해준다.
    setText("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} placeholder="할일적기" />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

//Todos를 내보내준다
export default React.memo(Todos);
