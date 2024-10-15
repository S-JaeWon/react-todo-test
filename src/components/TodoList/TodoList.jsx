/** @jsxImportSource @emotion/react */
import * as S from "./style";
import TodoItem from "../TodoItem/style";

function TodoList() {
    return (
        <div css={S.list}>
            <TodoItem text="할일1" done={true}/>
            <TodoItem text="할일2" done={true}/>
            <TodoItem text="할일3" done={false}/>
            <TodoItem text="할일4" done={false}/>
        </div>
    );
}

export default TodoList;