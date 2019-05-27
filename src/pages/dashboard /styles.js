import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardRepository = styled.div`
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

export const Repository = styled.div``;
