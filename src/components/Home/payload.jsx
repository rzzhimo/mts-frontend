import { generateRandomCNString, generateRandomID, generateRandomDate, random } from '../../constant';

const sourceTypes = [
  { label: '天涯社区' },
  { label: '定向监测' },
];
const attributeTypes = [
  { label: '敏感', color: '#ff0000' },
  { label: '非敏感', color: '#ffa500' },
]
const payload = {
  sensitiveInfo: new Array(8).fill(0).map(() => ({
    title: generateRandomCNString(10),
    source: sourceTypes[ random(0, sourceTypes.length) ],
    link: `https://www.invalid.${ generateRandomID(10) }.com`,
    timestamp: generateRandomDate(24 * 7),
    content: generateRandomCNString(Math.floor(Math.random() * 900 + 100)),
    attribute: attributeTypes[ random(0, attributeTypes.length) ],
  })),
  latestInfo: new Array(8).fill(0).map(() => ({
    title: generateRandomCNString(10),
    source: sourceTypes[ random(0, sourceTypes.length) ],
    link: `https://www.invalid.${ generateRandomID(10) }.com`,
    timestamp: generateRandomDate(24 * 7),
    content: generateRandomCNString(Math.floor(Math.random() * 200 + 100)),
    attribute: attributeTypes[ random(0, attributeTypes.length) ],
  })),
}

export default payload;
