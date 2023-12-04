import Util from '../util/Util.js';
import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

class Order {
  #orderMenu = new Map();

  constructor(answer) {
    this.#validate(answer);
  }

  #validate(answer) {
    Order.#validateFormat(answer);

    answer.split(',').forEach((nameAndNumber) => {
      this.#validateOneMenu(nameAndNumber);
    });

    this.#validateOnlyDrink();
    this.#validateOrderNumber();
  }

  #validateOneMenu(nameAndNumber) {
    const [name, numberString] = nameAndNumber.split('-');
    const number = Number(numberString);

    Order.#validateMenu(name);
    Util.validateNumber(numberString);
    Order.#validateRange(number);
    this.#validateDuplication(name, number);
  }

  static #validateFormat(answer) {
    const NOT_FORMAT = /[^가-힣|\-|0-9|,]/;

    if (NOT_FORMAT.test(answer)) {
      throw new Error(MESSAGE.error.order);
    }
  }

  static #validateMenu(name) {
    const allMenus = Util.getAllMenus();

    if (!allMenus.has(name)) {
      throw new Error(MESSAGE.error.order);
    }
  }

  static #validateRange(number) {
    if (number < 1) {
      throw new Error(MESSAGE.error.order);
    }
  }

  #validateDuplication(name, number) {
    if (this.#orderMenu.has(name)) {
      throw new Error(MESSAGE.error.order);
    }

    this.#orderMenu.set(name, number);
  }

  #validateOnlyDrink() {
    const isOnlyDrink = [...this.#orderMenu.keys()].every((name) =>
      VALUE.drink.has(name),
    );

    if (isOnlyDrink) {
      throw new Error(MESSAGE.error.onlyDrink);
    }
  }

  #validateOrderNumber() {
    const totalNumber = [...this.#orderMenu.values()].reduce(
      (sum, number) => sum + number,
      0,
    );

    if (totalNumber > 20) {
      throw new Error(MESSAGE.error.orderNumber);
    }
  }

  getOrderMenu() {
    return this.#orderMenu;
  }
}

export default Order;
