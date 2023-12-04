import VALUE from '../constants/value.js';

const Util = {
  validateNumber(answer, message) {
    const REG_EXP = /[^0-9]/;

    if (REG_EXP.test(answer)) {
      throw new Error(message);
    }
  },

  getAllMenus() {
    const { appetizer, main, dessert, drink } = VALUE;

    return new Map([...appetizer, ...main, ...dessert, ...drink]);
  },

  displayCurrency(amount) {
    const { language, won } = VALUE.unit;

    return `${amount.toLocaleString(language)}${won}`;
  },
};

export default Util;
