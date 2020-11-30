export const actionTypes = {
  SET_FILTER: 'SET_FILTER',
  RESET_FILTER: 'RESET_FILTER',
};

export const actionCreator = {
  setFilter: (data) => ({ type: actionTypes.SET_FILTER, data }),
  resetFilter: (data) => ({ type: actionTypes.RESET_FILTER, data }),
};
