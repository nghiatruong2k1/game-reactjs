import { initCaseLevel } from './reducer';
export const getNumber = (num) => {
  return num > 0 ? num : 0;
};
export const actionSetCurrent = (number) => {
  return {
    type: initCaseLevel.SET_CURRENT,
    payload: getNumber(number),
  };
};

export const actionSetTotal = (number) => {
  return {
    type: initCaseLevel.SET_TOTAL,
    payload: getNumber(number),
  };
};
