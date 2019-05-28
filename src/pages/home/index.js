import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import {
  Container, CardLogin, Login, Nav,
} from './styles';

export default class Home extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.prevetDefault();

    try {
      const { data: repository } = await api.get(`/users/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
      });
    } catch (error) {}
  };

  render() {
    return (
      <>
        <Container>
          <Nav>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Sign in</a>
            <a href="">Login</a>
          </Nav>

          <CardLogin>
            <Login onSubmit={this.handleAddRepository}>
              <p>Hello, enter your github user</p>
              <input
                type="text"
                placeholder="ex: Guirds"
                value={this.state.repositoryInput}
                onChange={e => this.setState({ repositoryInput: e.target.value })}
              />
              <Link to="/dashboard">
                {' '}
                <button type="submit">Send</button>{' '}
              </Link>
            </Login>
          </CardLogin>
        </Container>
      </>
    );
  }
}
