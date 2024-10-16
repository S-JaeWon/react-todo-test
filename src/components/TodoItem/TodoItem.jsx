/** @jsxImportSource @emotion/react */
import * as S from "./style";

function TodoItem({ id, done, text, removeTodo, editTodo}) {

    const handleRemove = () => {
        removeTodo(id);
    }

    const handleEdit = () => {
        editTodo();
    }
    
    return (
        <div css={S.item}>
            <div>
                <span css={done ? S.text + ' done' : S.text}>{text}</span>
                <div>
                    <button onClick={handleEdit}>수정</button>
                    <button onClick={handleRemove}>삭제</button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;