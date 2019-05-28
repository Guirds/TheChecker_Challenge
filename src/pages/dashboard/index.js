import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      </Container>
    );
  }
}
/*
Dashboard.propTypes = {
  repo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar_url: PropTypes.string,
      name: PropTypes.string,
      bio: PropTypes.string,
      location: PropTypes.string,
      public_repos: PropTypes.number,
      following: PropTypes.number,
      followers: PropTypes.number,
    }),
  ).isRequired,
};

<Repository>
          {this.props.repo.data.map(repo => (
            <>
              <HeaderRepository key={repo.id}>
                <img src={repo.avatar_url} alt="Avatar" />
                <strong>{repo.name}</strong>
                <small>{repo.bio}</small>
              </HeaderRepository>
              <ul>
                <li>
                  {repo.location}
                  <small> localização</small>
                </li>
                <li>
                  {repo.public_repos}
                  <small> respositorio</small>
                </li>
                <li>
                  {repo.followers}
                  <small> seguidores</small>
                </li>
                <li>
                  {repo.following}
                  <small> seguindo</small>
                </li>
              </ul>
            </>
          ))}
        </Repository>
*/
const mapStateToProps = state => ({
  repo: state.repository,
});

const mapDispatchToProps = dispatch => bindActionCreators(RepositoryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
