/** @jsxImportSource @emotion/react */
import * as S from "./style";

function TodoTemplete({ children }) {
    return (
        <div css={S.templete}>
            {children}
        </div>
    );
}

export default TodoTemplete;