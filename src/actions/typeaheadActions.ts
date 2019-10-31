import { action } from 'typesafe-actions';
import { RepositoriesTypes, IRepository } from '../types';

export const loadRequest = (query: string) => action(RepositoriesTypes.LOAD_REQUEST, { query });

export const loadSuccess = (data: IRepository[]) => action(RepositoriesTypes.LOAD_SUCCCES, { data });