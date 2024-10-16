/** @jsxImportSource @emotion/react */
import * as S from "./style";
import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([
        {
            id: null,
            text: "",
            done: false
        }
    ]);

    const removeTodo = (id) => {
        // setTodos(todos.filter(todo => todo.id !== id)); 
    };

    const editTodo = (id) => {

    };

    return (
        <div css={S.list}>
            {
                todos.map((todo) => (
                    <TodoItem 
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        done={todo.done}
                        removeTodo={removeTodo}
                        editTodo={editTodo}
                    />
                ))
            }
        </div>
    );
}

export default TodoList;