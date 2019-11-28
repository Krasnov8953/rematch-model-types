import { IRootState } from '..';
import { RematchDispatch } from '@rematch/core';

const asyncMethod = () => Promise.resolve(true);

interface ICounterState {
  counter: number;
}

export const counter = {
  state: {
    counter: 0,
  } as ICounterState,
  reducers: {
    increment: (state: ICounterState) => ({
      counter: state.counter + 1
    }),
    decrement: (state: ICounterState) => ({
      counter: state.counter - 1
    })
  },
  effects: (dispath: RematchDispatch) => ({
    async asyncEffect(isAsync: boolean, state: IRootState) {
      const isTrue = await asyncMethod();
      const { counter } = state.counter;
      if (isTrue) {
        dispath.counter.increment();
        console.log(counter)
        return isTrue;
      }

      return false;
    }
  })
};