import { css } from '@emotion/css';

export const myapp = css`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  & * {
    margin: 0;
    padding: 0;
  }
`;

export const button = css`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 36px;
  height: 36px;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: transparent;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const mainIcon = css`
  width: 24px; ;
`;

export const popup = css`
  position: absolute;
  display: flex;
  bottom: calc(100% + 10px);
  bottom: 0;
  right: 50px;
`;

export const item = css`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 20px;
  cursor: pointer;

  & + & {
    margin-left: 4px;
  }

  &:hover {
    background-color: rgba(200, 200, 255, 0.8);
  }
`;
