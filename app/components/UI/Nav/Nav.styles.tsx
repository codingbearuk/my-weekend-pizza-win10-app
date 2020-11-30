import styled from 'styled-components';
import colors from '../../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const MenuIcon = styled.div`
  color: ${colors.black};
  font-size: 25px;
  margin-bottom: 50px;
  width: 100%;
  margin: 20px 20px;
  cursor: default;
  :hover {
    color: ${colors.yellow};
  }
`;
