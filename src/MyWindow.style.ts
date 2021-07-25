import { css } from '@emotion/css';

export const root = css`
  border-radius: 4px 4px 0;
  width: 200px;
`;

export const titleBar = css`
  background: #d7d5d7;
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 8px;
`;

export const titleText = css`
  display: block;
  text-align: center;
  flex-grow: 1;
`;

export const winSizeButton = css`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  border: none;
  display: flex;
  font-size: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.minimize {
    background: #28c840;
  }

  &:not(.minimize) {
    background: #febc2e;
  }

  &:hover {
    font-size: 18px;
  }
`;

export const content = css`
  background: rgba(255, 255, 255, 0.7);
  padding: 8px;
  width: 100%;

  &.minimize {
    display: none;
  }
`;
