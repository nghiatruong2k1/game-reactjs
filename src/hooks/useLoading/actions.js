import { initCaseLoading } from './reducer';
export const actionToggleLoading = (isLoading) => {
  return {
    type: initCaseLoading.TOGGLE_LOADING,
    payload: isLoading,
  };
};
