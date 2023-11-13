import getAllMenus from '../utils/menuUtils.js';
import convertCurrencyUnit from '../utils/convertUtils.js';

const Total = {
  calculateTotal(menu) {
    const allMenus = getAllMenus();
    let total = 0;

    menu.forEach((number, name) => {
      total += allMenus.get(name) * number;
    });

    return total;
  },

  displayTotal(total) {
    return convertCurrencyUnit(total);
  },
};

export default Total;
