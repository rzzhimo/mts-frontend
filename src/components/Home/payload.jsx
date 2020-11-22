import {
  generateRandomCNString,
  generateRandomID,
  generateRandomDate,
  random,
  sourceTypes,
  sensitiveLevels,
} from '../../constant';

const payload = {
  sensitiveInfo: new Array(8).fill(0).map(() => ({
    title: generateRandomCNString(10),
    source: sourceTypes[random(0, sourceTypes.length)],
    link: `https://www.invalid.${generateRandomID(10)}.com`,
    timestamp: generateRandomDate(24 * 7),
    content: generateRandomCNString(Math.floor(Math.random() * 900 + 100)),
    attribute: sensitiveLevels[random(0, sensitiveLevels.length)],
  })),
  latestInfo: new Array(8).fill(0).map(() => ({
    title: generateRandomCNString(10),
    source: sourceTypes[random(0, sourceTypes.length)],
    link: `https://www.invalid.${generateRandomID(10)}.com`,
    timestamp: generateRandomDate(24 * 7),
    content: generateRandomCNString(Math.floor(Math.random() * 200 + 100)),
    attribute: sensitiveLevels[random(0, sensitiveLevels.length)],
  })),
};

export default payload;
