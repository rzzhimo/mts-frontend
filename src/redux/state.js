import { sourceTypes, sensitiveLevels, timeRangeOptions, timeOrderOptions } from '../constant';

const initState = {
  currentTimeRange: timeRangeOptions[0].value,
  currentTimeOrder: timeOrderOptions[0].value,
  currentSensitive: sensitiveLevels[0].value,
  currentSource: sourceTypes[0].value,
};

export default initState;
