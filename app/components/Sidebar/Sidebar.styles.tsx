import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div<{ isMaximized: boolean }>`
  height: 100vh;
  width: 100%;
  background: ${(p) =>
    p.isMaximized ? colors.transparentWhiteMaximized : colors.transparentWhite};
  backdrop-filter: blur(10px);
`;
