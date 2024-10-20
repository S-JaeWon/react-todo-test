/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as S from "./style";

function TodoAdd({ onAddTodo }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(value);
    setValue("");
  };

  console.log(value);

  return (
    <div css={S.addformlayout}>
      <form css={S.addform} onSubmit={handleSubmit}>
        <input
          css={S.input}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="할 일을 입력 후 Enter를 눌러주세요"
        />
      </form>
    </div>
  );
}

export default TodoAdd;
