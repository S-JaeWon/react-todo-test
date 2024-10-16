import { css } from '@emotion/react';

export const item = css`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
`

export const text = css`
  flex: 1;
  font-size: 21px;
  color: #495057;

  &.done {
    color: gray; 
  }
`;

