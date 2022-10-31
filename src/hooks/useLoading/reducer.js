export const initStateLoading = 0;
export const initCaseLoading = {
  TOGGLE_LOADING: '[TOGGLE_LOADING,?bool]',
};
export function reducerStateLoading(
  prevState = initStateLoading,
  { type, payload },
) {
  switch (type) {
    case initCaseLoading.TOGGLE_LOADING: {
      if (payload) {
        return prevState + 1;
      } else {
        return prevState - 1;
      }
    }
  }
  return prevState;
}
