import { css } from 'styled-components';

export const srOnly = css`
  position: absolute;

  overflow: hidden;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  white-space: nowrap;

  clip: rect(0, 0, 0, 0);
  border-width: 0;
`;
