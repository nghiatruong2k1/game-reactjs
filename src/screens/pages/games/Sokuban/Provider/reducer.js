import { combineReducers } from 'redux';
import { reducerStateLoading } from '~/hooks/useLoading/reducer';
import { initStateLevel, reducerStateLevel } from '../pages/Playing/Level/reducer';
import { initStateMap, reducerStateMap } from '../pages/Playing/Map/reducer';
export const initState = {
  map: initStateMap,
  level: initStateLevel,
};
export const reducerState = combineReducers({
  map: reducerStateMap,
  level: reducerStateLevel,
  loading: reducerStateLoading,
});
