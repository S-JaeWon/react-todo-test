/** @jsxImportSource @emotion/react */
import * as S from "./style";
import TodoItem from "../TodoItem/TodoItem";
import TodoAdd from "../TodoAdd/TodoAdd";
import { useEffect, useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(null); 
  const [editTodo, setEditTodo] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  useEffect(() => { // 로컬 스토리지에 값은(배열로) 들어가나, 새로고침하면 빈배열로 반환되는 문제가생김. gpt 도움으로 아래처럼 바꿔서 해결함
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

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

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.done;
    if (filter === "incomplete") return !todo.done;
    return true; // "all"인 경우
  });

  return (
    <div>
      <div>
        <label htmlFor="filter-select">필터: </label>
        <select
          id="filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">전체</option>
          <option value="completed">완료</option>
          <option value="incomplete">미완료</option>
        </select>
      </div>
      {/* selectbox 렌더링 부분은 gpt를 이용하여 만들었음 */}
      <div css={S.list}>
        {filteredTodos.map((todo) => (
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
    </div>
  );
}

export default TodoList;
