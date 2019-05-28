import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as RepositoryActions } from '../ducks/repository';

export function* addRepository(action) {
  const { data } = yield call(api.get, `/users/${action.payload.repository}`);

  const repositoryData = {
    id: data.id,
    avatar: data.avatar_url,
    name: data.name,
    bio: data.bio,
    location: data.location,
    public_repos: data.public_repos,
    following: data.following,
    followers: data.followers,
  };

  yield put(RepositoryActions.addRepositorySucess(repositoryData));
}
