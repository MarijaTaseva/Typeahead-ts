import { put } from 'redux-saga/effects';
import { loadSuccess } from '../actions/typeaheadActions';
import axios from 'axios'
import { IAction } from '../types';

export function* loadCountries(action: IAction){
  try {
    const url = `https://places.cteleport.com/countries?q=${action.payload.query}`
    const response = yield axios.get(url);
    yield put(loadSuccess(response.data))
  } 
  catch (error) {
    console.log(error)
  }
}