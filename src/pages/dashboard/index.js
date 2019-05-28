import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as RepositoryActions } from '../../store/ducks/repository';

import {
  Container, Repository, HeaderRepository, Nav,
} from './styles';

class Dashboard extends Component {
  componentDidMount() {
    this.props.addRepositoryRequest();
  }

  render() {
    return (
      <Container>
        <Nav>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Profile</a>
          <a href="/">Exit</a>
        </Nav>

        <Repository>
          <HeaderRepository>
            <img src="https://avatars3.githubusercontent.com/u/37129994?v=4" alt="Avatar" />
            <strong>Guilherme Santos</strong>
            <small>FullStack Junior</small>
          </HeaderRepository>

          <ul>
            <li>
              Brasil, São José-SC
              <small> location</small>
            </li>
            <li>
              22
              <small> public_repos</small>
            </li>
            <li>
              04
              <small> followers</small>
            </li>
            <li>
              05
              <small> following</small>
            </li>
          </ul>
        </Repository>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repo: state.repository,
});

const mapDispatchToProps = dispatch => bindActionCreators(RepositoryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
