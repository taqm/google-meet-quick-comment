import { css } from '@emotion/css';
import classnames from 'classnames';

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
  position: absolute;
  pointer-events: initial;
`;

const item = css`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  padding: 4px 8px;
  font-size: 12px;
  display: flex;
  align-items: center;

  & + & {
    margin-top: 4px;
  }
`;

export const normalItem = classnames(
  item,
  css`
    cursor: pointer;

    & > div {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:hover {
      background-color: rgba(200, 200, 255, 0.8);
    }
  `,
);

export const editableItem = classnames(
  item,
  css`
    & > input {
      width: 100%;
    }
  `,
);

export const editButtonArea = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const editButton = css`
  background: none;
  margin-top: 4px;
  padding: 2px 8px;
  border: none;
  color: #2962ff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
