import getAllMenus from './utils/menuUtils.js';
import convertCurrencyUnit from './utils/convertUtils.js';
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

  getTotalString(total) {
    return convertCurrencyUnit(total);
  },

  getGiftDetail(gift) {
    if (gift > 0) {
      return VALUE.gift.detail;
    }

    return MESSAGE.none;
  },
};

export default Total;
