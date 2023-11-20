import VALUE from '../constants/value.js';

const Util = {
  convertCurrencyUnit(number) {
    const stringOfCurrencyUnit = number.toLocaleString('ko-KR');

    return `${stringOfCurrencyUnit}${VALUE.unit.won}`;
  },

  getAllMenus() {
    const { appetizer, main, dessert, drink } = VALUE.menu;
    const allMenus = [...appetizer, ...main, ...dessert, ...drink];

    return new Map(allMenus);
  },
};

export default Util;
