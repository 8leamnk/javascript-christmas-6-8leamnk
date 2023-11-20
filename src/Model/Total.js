import Util from '../Util/Util.js';

const Total = {
  calculateTotal(menu) {
    const allMenus = Util.getAllMenus();
    let total = 0;

    menu.forEach((number, name) => {
      total += allMenus.get(name) * number;
    });

    return total;
  },

  displayTotal(total) {
    return Util.convertCurrencyUnit(total);
  },
};

export default Total;
