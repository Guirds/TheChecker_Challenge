import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0;

  a {
    width: 100%;
    padding: 20px;
    border-radius: 3px;

    color: #bcbacb;
    font-size: 20px;
    text-align: center;
    text-decoration-line: none;

    &:hover {
      color: #6c757d;
      background: #37e8a0;
    }
  }
`;
