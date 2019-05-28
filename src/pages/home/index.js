import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as RepositoryActions } from '../../store/ducks/repository';

import { Container, Nav } from './styles';

class Home extends Component {
  state = {
    repositoryInput: '',
  };

  handleAddRepository = (event) => {
    event.preventDefault();

    this.setState({ repositoryInput: '' });
  };

  render() {
    return (
      <Container>
        <Nav>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Sign in</a>
          <a href="/">Login</a>
        </Nav>

        <form onSubmit={this.handleAddRepository}>
          <p>Hello, enter your github user</p>
          <input
            placeholder="ex: Guirds"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <Link to="/dashboard">
            {' '}
            <button type="submit">send</button>
          </Link>
        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(RepositoryActions, dispatch);

export default connect(mapDispatchToProps)(Home);
