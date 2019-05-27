import React from 'react';

import Header from '../../components/header';

import { Container, CardLogin, Login } from './styles';

const Home = () => (
  <>
    <Container>
      <Header />

      <CardLogin>
        <Login>
          <p>Hello, enter your github user</p>
          <input type="text" placeholder="ex: Guirds" />
          <button type="submit">Send</button>
        </Login>
      </CardLogin>
    </Container>
  </>
);

export default Home;
