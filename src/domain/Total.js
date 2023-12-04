import Util from '../util/Util.js';

class Total {
  #total = 0;

  constructor(orderMenu) {
    this.#calculateTotal(orderMenu);
  }

  #calculateTotal(orderMenu) {
    const allMenus = Util.getAllMenus();

    orderMenu.forEach((number, name) => {
      this.#total += allMenus.get(name) * number;
    });
  }

  getTotal() {
    return this.#total;
  }
}

export default Total;
