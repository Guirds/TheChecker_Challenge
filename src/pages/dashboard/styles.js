import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Repository = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 15%;
  width: 25%;
  border-radius: 5px;
  color: #6c757d;

  box-shadow: 0px 2px 4px 0 rgb(2, 211, 124);

  &:hover {
    box-shadow: 0 10px 20px 0 rgb(55, 232, 160);
  }
  ul {
    list-style: none;

    li {
      text-align: center;
      padding: 5px;
      border-bottom: 1px solid #37e8a0;
      font-weight: 700;

      &:first-child {
        font-size: 14px;
        padding-top: 30px;
      }

      &:last-child {
        border: 0;
        padding-bottom: 15px;
      }

      small {
        font-style: italic;
        font-weight: 300;
      }
    }
  }
`;

export const HeaderRepository = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 20px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  strong {
    padding: 10px 0 10px 0;
  }
`;
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
