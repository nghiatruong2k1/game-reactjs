import { initCaseTitle } from './reducer';
export const actionAddTitle = (title) => {
  return {
    type: initCaseTitle.ADD_TITLE,
    payload: title,
  };
};
export const actionRemoveTitle = () => {
  return {
    type: initCaseTitle.REMOVE_TITLE
  };
};
