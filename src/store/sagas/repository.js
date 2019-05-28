import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as RepositoryActions } from '../ducks/repository';

export function* addRepository(action) {
  try {
    const response = yield call(api.get, `/users/${action.payload.repository}`);

    yield put(RepositoryActions.addRepositorySucess(response.data));
  } catch (err) {
    console.log(err);
  }
}
