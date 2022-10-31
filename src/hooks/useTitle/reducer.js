export const initStateTitle = [];
export const initCaseTitle = {
  ADD_TITLE: '[ADD_TITLE,?str]',
  REMOVE_TITLE: '[REMOVE_TITLE]',
};
export function reducerStateTitle(
  prevState = initStateTitle,
  { type, payload },
) {
  switch (type) {
    case initCaseTitle.ADD_TITLE: {
      const titles = [...prevState];
      titles.unshift(payload);
      return titles;
    }
    case initCaseTitle.REMOVE_TITLE: {
      const titles = [...prevState];
      titles.shift();
      return titles;
    }
  }
  return prevState;
}
