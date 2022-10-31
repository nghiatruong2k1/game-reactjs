import { getMap } from './actions';

export const initStateMap = getMap();
export const initCaseMap = {
  SET_MAP: '[SET_MAP,?array]',
};
export function reducerStateMap(prevState = initStateMap, { type, payload }) {
  switch (type) {
    case initCaseMap.SET_MAP: {
      return payload;
    }
    default:
      return prevState;
  }
}
