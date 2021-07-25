import { css } from '@emotion/css';

export const myapp = css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 100;
`;

export const content = css`
  padding: 10px;
  position: absolute;
  pointer-events: initial;
`;

export const item = css`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;

  & + & {
    margin-top: 4px;
  }

  &:hover {
    background-color: rgba(200, 200, 255, 0.8);
  }
`;
