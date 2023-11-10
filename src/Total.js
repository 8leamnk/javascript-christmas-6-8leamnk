import getAllMenus from './utils/menuUtils.js';
import VALUE from './constants/value.js';

class Total {
  #total;

  constructor() {
    this.#total = 0;
  }

  calculateTotal(menu) {
    const allMenus = getAllMenus();

    menu.forEach((value, key) => {
      this.#total += allMenus.get(key) * value;
    });

    return this.#total;
  }

  calculateGift() {
    let gift = 0;
    const type = VALUE.gift.detail.split(' ').at(0);

    if (this.#total >= VALUE.gift.condition) {
      gift += VALUE.menu.drink.get(type);
    }

    return gift;
  }
}

export default Total;
