import VALUE from './constants/value.js';

class Total {
  #total;

  constructor() {
    this.#total = 0;
  }

  calculateTotal(menu) {
    const totalOrderAmount = [...menu.values()].reduce(
      (acc, amount) => acc + amount,
      0,
    );

    this.#total = totalOrderAmount;

    return totalOrderAmount;
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
