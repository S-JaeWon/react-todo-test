/** @jsxImportSource @emotion/react */
import * as S from "./style";

function TodoItem({
  id,
  done,
  text,
  onToggleTodo,
  onRemoveTodo,
  isEditing,
  editValue,
  setEditValue,
  startEditTodo,
  onEditTodo,
}) {
  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  return (
    <div>
      {isEditing === id ? (
        <div>
          <input type="text" value={editValue} onChange={handleEditChange} />
          <button onClick={() => onEditTodo(id)}>저장</button>
        </div>
      ) : (
        <>
          <div css={S.item}>
            <input
              type="checkbox"
              checked={done}
              onChange={() => onToggleTodo(id)}
            />
            <span css={[S.text, done && S.done]}>{text}</span>
            <button onClick={() => startEditTodo(id, text)}>수정</button>
            <button onClick={() => onRemoveTodo(id)}>삭제</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
