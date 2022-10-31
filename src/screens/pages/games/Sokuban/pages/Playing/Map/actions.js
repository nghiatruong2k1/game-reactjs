import { initCaseMap } from './reducer';
export function getMap(map) {
  return Array.isArray(map) ? map : Array(10).fill(Array(10).fill(null));
}

export const actionSetMap = (map) => {
  return {
    type: initCaseMap.SET_MAP,
    payload: getMap(map),
  };
};
