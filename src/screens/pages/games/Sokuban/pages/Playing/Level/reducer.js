export const initStateLevel = {
  current: 0,
  total: 0,
};
export const initCaseLevel = {
  SET_CURRENT: '[SET_CURRENT,?num]',
  SET_TOTAL: '[SET_TOTAL,?num]',
};

export function reducerStateLevel(
  prevState = initStateLevel,
  { type, payload },
) {
  switch (type) {
    case initCaseLevel.SET_TOTAL: {
      return {
        ...prevState,
        total: payload > 0 ? payload : 0,
      };
    }
    case initCaseLevel.SET_CURRENT: {
      return {
        ...prevState,
        current: payload < prevState.total ? payload : prevState.total,
      };
    }
    default: {
      return prevState;
    }
  }
}
