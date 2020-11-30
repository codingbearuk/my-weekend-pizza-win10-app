import styled, { css } from 'styled-components';
import colors from '../../../../constants/colors';

export const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.black};
  font-size: 20px;
  cursor: default;
  width: 100%;
  padding: 20px;
  overflow: hidden;
  max-height: 60px;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${colors.white};
    `}
  i {
    margin-right: 25px;
  }

  :hover {
    background-color: ${colors.yellow};
  }
`;
