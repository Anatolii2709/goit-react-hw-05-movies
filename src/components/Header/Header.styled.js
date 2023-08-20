import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  gap: 20px;
  padding: 8px 24px;
  background-color: #ffdead;
`;

const StyledHeaderButton = styled.button`
  display: flex;
  gap: 20px;
  padding: 8px 24px;
  background-color: #deb887;
  color: #f1f1f1;
  border-radius: 24px;
  border: 3px #fff;
  transition: box-shadow 250ms, background-color 250ms;
  &:hover {
    box-shadow: 0 0 3px rgba(33, 33, 33, 0.9);
    background-color: #cd853f;
  }
`;

const StyledLink = styled(NavLink)`
  color: #f1f1f1;
  &.active > ${StyledHeaderButton} {
    color: #e0ffff;
    box-shadow: 0 0 3px rgba(33, 33, 33, 0.9);
    background-color: #cd853f;
  }
`;

export { StyledLink, StyledHeader, StyledHeaderButton };
