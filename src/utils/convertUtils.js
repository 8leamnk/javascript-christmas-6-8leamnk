import VALUE from '../constants/value.js';

const convertCurrencyUnit = (number) => {
  const stringOfCurrencyUnit = number.toLocaleString('ko-KR');

  return `${stringOfCurrencyUnit}${VALUE.unit.won}`;
};

export default convertCurrencyUnit;
