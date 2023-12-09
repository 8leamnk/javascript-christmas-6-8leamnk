import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

const Util = {
  NOT_NUMBER: /[^0-9]/,

  validateNumber(answer) {
    if (this.NOT_NUMBER.test(answer)) {
      throw new Error(MESSAGE.error.date);
    }
  },

  getAllMenus() {
    const { appetizer, main, dessert, beverage } = VALUE;
    const allMenus = new Map([...appetizer, ...main, ...dessert, ...beverage]);

    return allMenus;
  },

  convertToCurrency(number) {
    return number.toLocaleString('ko-KR');
  },
};

export default Util;
