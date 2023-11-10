import getAllMenus from './utils/menuUtils.js';
import VALUE from './constants/value.js';
import MESSAGE from './constants/message.js';

class Menu {
  #menu;

  constructor() {
    this.#menu = new Map();
  }

  arrangeOrderHistory() {
    const orderHistory = [];

    this.#menu.forEach((value, key) => {
      orderHistory.push(`${key} ${value}${VALUE.unit.number}\n`);
    });

    return orderHistory.join('');
  }

  validate(input) {
    const allMenuNames = [...getAllMenus().keys()];

    input.split(',').forEach((menuAndNumber) => {
      this.#validatePerMenu(menuAndNumber, allMenuNames);
    });

    this.#validateOnlyDrink();
    this.#validateSumOfMenus();

    return this.#menu;
  }

  #validatePerMenu(menuAndNumber, allMenuNames) {
    const [menu, numberString] = menuAndNumber.split('-');
    const number = Number(numberString);

    Menu.#validateFormat(menuAndNumber);
    Menu.#validateNotExistMenu(menu, allMenuNames);
    Menu.#validateNumberOfMenus(number);
    this.#validateDuplication(menu, number);
  }

  static #validateFormat(menuAndNumber) {
    if (!VALUE.menu.format.test(menuAndNumber)) {
      throw new Error(MESSAGE.error.menu);
    }
  }

  static #validateNotExistMenu(menu, allMenuNames) {
    if (!allMenuNames.includes(menu)) {
      throw new Error(MESSAGE.error.menu);
    }
  }

  static #validateNumberOfMenus(number) {
    if (number < VALUE.menu.range.min) {
      throw new Error(MESSAGE.error.menu);
    }
  }

  #validateDuplication(menu, number) {
    if (this.#menu.get(menu)) {
      throw new Error(MESSAGE.error.menu);
    }

    this.#menu.set(menu, number);
  }

  #validateOnlyDrink() {
    const drinks = [...VALUE.menu.drink.keys()];
    const isOnlyDrink = [...this.#menu.keys()].every((menu) =>
      drinks.includes(menu),
    );

    if (isOnlyDrink) {
      throw new Error(MESSAGE.error.onlyDrink);
    }
  }

  #validateSumOfMenus() {
    const count = [...this.#menu.values()].reduce(
      (acc, number) => acc + number,
      0,
    );

    if (count > VALUE.menu.range.max) {
      throw new Error(MESSAGE.error.maxMenu);
    }
  }
}

export default Menu;