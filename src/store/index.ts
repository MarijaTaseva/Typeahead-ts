import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { IRepositoriesState } from '../types';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

export interface ApplicationState {
  repositories: IRepositoriesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
