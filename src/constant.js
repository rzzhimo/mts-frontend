import moment from 'moment';

export const generateRandomID = (length) => Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);

export const generateRandomCNString = (length) => unescape(new Array(length).fill(0).map(() => `%u${ Math.floor(Math.random() * (40870 - 19968) + 19968).toString(16) }`).join(''));

export const generateRandomDate = (hour) => moment(Date.now() - Math.floor(Math.random() * 1000 * 3600 * hour));

export const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
