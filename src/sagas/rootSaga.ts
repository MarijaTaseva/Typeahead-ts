import { all, takeLatest } from 'redux-saga/effects';
import { RepositoriesTypes } from '../types';
import { loadCountries } from './typeaheadSaga';


export default function* rootSaga() {
  return yield all([
    takeLatest(
      RepositoriesTypes.LOAD_REQUEST,
      loadCountries
    )
  ]);
}
