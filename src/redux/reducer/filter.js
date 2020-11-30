import {sensitiveLevels, sourceTypes, timeOrderOptions, timeRangeOptions} from "../../constant";

export const setFilter = (state, data) => {
  Object.keys(data).forEach(key => {
    state[key] = data[key];
  });
  return state;
};

export const resetFilter = (state) => {
  return {
    ...state,
    currentTimeRange: timeRangeOptions[0].value,
    currentTimeOrder: timeOrderOptions[0].value,
    currentSensitive: sensitiveLevels[0].value,
    currentSource: sourceTypes[0].value,
  };
};