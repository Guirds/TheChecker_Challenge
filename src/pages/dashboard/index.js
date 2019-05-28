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

        {this.props.repo.data.map(repo => (
          <Repository key={repo.id}>
            <HeaderRepository>
              <img src={repo.avatar_url} alt="Avatar" />
              <strong>{repo.name}</strong>
              <small>{repo.bio}</small>
            </HeaderRepository>

            <ul>
              <li>
                {repo.location}
                <small> location</small>
              </li>
              <li>
                {repo.public_repos}
                <small> public_repos</small>
              </li>
              <li>
                {repo.followers}
                <small> followers</small>
              </li>
              <li>
                {repo.following}
                <small> following</small>
              </li>
            </ul>
          </Repository>
        ))}
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
