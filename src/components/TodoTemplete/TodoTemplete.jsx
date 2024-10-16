/** @jsxImportSource @emotion/react */
import * as S from "./style";

function TodoTemplete({ children }) {
    return (
        <div css={S.rootlayout}>
            <div css={S.templete}>
                {children}
            </div>
        </div>
    );
}

export default TodoTemplete;