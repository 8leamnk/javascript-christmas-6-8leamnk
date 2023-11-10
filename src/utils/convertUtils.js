import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

const convertCurrencyUnit = (number) => {
  if (number > 0) {
    const stringOfCurrencyUnit = number.toLocaleString('ko-KR');

    return `${stringOfCurrencyUnit}${VALUE.unit.won}`;
  }

  return MESSAGE.none;
};

export default convertCurrencyUnit;
