import { css } from '@emotion/react';

export const removeStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  display: none;

  &:hover {
    color: #ff6b6b;
  }
`;

export const todoItemBlockStyle = css`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover .remove {
    display: initial;
  }
`;

export const checkCircleStyle = css`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  &.done {
    border: 1px solid #38d9a9;
    color: #38d9a9;
  }
`;

export const textStyle = css`
  flex: 1;
  font-size: 21px;
  color: #495057;

  &.done {
    color: #ced4da;
  }
`;

