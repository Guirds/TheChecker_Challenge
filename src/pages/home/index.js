import React from 'react';

import {
  Container, Nav, CardLogin, Login,
} from './styles';

const Home = () => (
  <Container>
    <Nav>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Sign in</a>
      <a href="">Login</a>
    </Nav>

    <CardLogin>
      <Login>
        <p>Hello, enter your github user</p>
        <input type="text" placeholder="ex: Guirds" />
        <button type="submit">Send</button>
      </Login>
    </CardLogin>
  </Container>
);

export default Home;
