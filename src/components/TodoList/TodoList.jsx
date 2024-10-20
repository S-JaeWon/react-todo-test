/** @jsxImportSource @emotion/react */
import * as S from "./style";
import TodoItem from "../TodoItem/TodoItem";
import TodoAdd from "../TodoAdd/TodoAdd";
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(null); // 수정 중인 투두의 ID 저장
  const [editTodo, setEditTodo] = useState("");

  const onAddTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const onToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const onRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditTodo = (id, text) => {
    setIsEditing(id); // 수정할 투두 ID 저장
    setEditTodo(text); // 기존 투두의 텍스트를 입력 필드에 설정
  };

  /** onEditTodo함수 안에 수정할 값 id를 불려오려 했으나 작동하지 않아 GPT 도움으로 해결함 */

  const onEditTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editTodo } : todo))
    );
    setIsEditing(null);
    setEditTodo("");
  };

  return (
    <div css={S.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
          onToggleTodo={onToggleTodo}
          onRemoveTodo={onRemoveTodo}
          isEditing={isEditing}
          editValue={editTodo}
          setEditValue={setEditTodo}
          startEditTodo={startEditTodo}
          onEditTodo={onEditTodo}
        />
      ))}
      <TodoAdd onAddTodo={onAddTodo} />
    </div>
  );
}

export default TodoList;
