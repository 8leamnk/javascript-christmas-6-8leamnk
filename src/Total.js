import getAllMenus from './utils/menuUtils.js';
import MESSAGE from './constants/message.js';
import VALUE from './constants/value.js';

const Total = {
  calculateTotal(menu) {
    const allMenus = getAllMenus();
    let total = 0;

    menu.forEach((value, key) => {
      total += allMenus.get(key) * value;
    });

    return total;
  },

  calculateGift(total) {
    const type = VALUE.gift.detail.split(' ').at(0);
    let gift = 0;

    if (total >= VALUE.gift.condition) {
      gift += VALUE.menu.drink.get(type);
    }

    return gift;
  },
};

export default Total;
