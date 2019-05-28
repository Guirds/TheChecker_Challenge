import React from 'react';
import {
  Container, Repository, HeaderRepository, Nav,
} from './styles';

const Dashboard = () => (
  <Container>
    <Nav>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Profile</a>
      <a href="">Exit</a>
    </Nav>

    <Repository>
      <HeaderRepository>
        <img src="https://avatars3.githubusercontent.com/u/37129994?v=4" alt="Avatar" />
        <strong>Nome</strong>
        <small>Bio</small>
      </HeaderRepository>

      <ul>
        <li>
          localização<small> localização</small>
        </li>

        <li>
          respositorio<small> respositorio</small>
        </li>

        <li>
          seguidores<small> seguidores</small>
        </li>

        <li>
          seguindo<small> seguindo</small>
        </li>
      </ul>
    </Repository>
  </Container>
);

export default Dashboard;
