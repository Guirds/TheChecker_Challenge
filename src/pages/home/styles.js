import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardLogin = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 15%;
  width: 25%;
  height: 200px;
  border-radius: 5px;

  box-shadow: 0px 2px 4px 0 rgb(2, 211, 124);

  &:hover {
    box-shadow: 0 10px 20px 0 rgb(55, 232, 160);
  }
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  p {
    color: #6c757d;
    font-size: 18px;
  }
  input {
    width: 100px;
    transition: width 0.35s ease-in-out;

    &:focus {
      width: 200px;
    }

    height: 30px;
    font-size: 16px;
    border-radius: 5px;

    text-align: center;
    color: #6c757d;
  }

  button {
    height: 25px;
    width: 80px;

    border: none;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 0 rgb(127, 125, 142);

    background: #37e8a0;
    color: #7f7d8e;

    transition: width 0.35s ease-in-out;

    &:hover {
      width: 120px;
    }
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
