import { init, RematchRootState } from '@rematch/core';
import * as models from './models';
import { useDispatch } from 'react-redux';

export const store = init({ models });

export type Store = typeof store;

export type Dispatch = typeof store.dispatch;
export type IRootState = RematchRootState<typeof models>;

export const useRematchDispatch = <D extends {}, MD>(
  selector: (dispatch: D) => MD,
) => {
  const dispatch = useDispatch<D>();
  return selector(dispatch);
};