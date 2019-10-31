export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES'
}

export interface IRepository {
  name: string
  code: string
}

export interface IRepositoriesState {
  readonly data: IRepository[]
  readonly loading: boolean
  readonly error: boolean
}

export interface IAction {
  type: string;
  payload?: any;
}
