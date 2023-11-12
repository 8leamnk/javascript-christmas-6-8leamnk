import getAllMenus from './utils/menuUtils.js';
import convertCurrencyUnit from './utils/convertUtils.js';

const Total = {
  calculateTotal(menu) {
    const allMenus = getAllMenus();
    let total = 0;

    menu.forEach((value, key) => {
      total += allMenus.get(key) * value;
    });

    return total;
  },

  displayTotal(total) {
    return convertCurrencyUnit(total);
  },
};

export default Total;
