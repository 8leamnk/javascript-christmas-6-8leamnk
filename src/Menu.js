import getAllMenus from './utils/menuUtils.js';
import MESSAGE from './constants/message.js';
import VALUE from './constants/value.js';

class Menu {
  #menu;

  constructor(input) {
    this.#menu = new Map();
    this.#validate(input);
  }

  findOutMenuInfo() {
    const menu = this.#menu;
    const orderHistory = this.#findOutOrderHistory();

    return { menu, orderHistory };
  }

  #findOutOrderHistory() {
    const orderHistory = [...this.#menu]
      .map(([name, number]) => `${name} ${number}${VALUE.unit.number}\n`)
      .join('');

    return orderHistory;
  }

  #validate(input) {
    const allMenuNames = [...getAllMenus().keys()];

    input.split(VALUE.comma).forEach((string) => {
      const nameAndNumber = string.trim();

      this.#validatePerMenu(nameAndNumber, allMenuNames);
    });

    this.#validateOnlyDrink();
    this.#validateSumOfMenus();
  }

  #validatePerMenu(nameAndNumber, allMenuNames) {
    const [name, numberString] = nameAndNumber.split(VALUE.hyphen);
    const number = Number(numberString);

    Menu.#validateFormat(nameAndNumber);
    Menu.#validateNotExistMenu(name, allMenuNames);
    Menu.#validateNumberOfMenus(number);
    this.#validateDuplication(name, number);
  }

  static #validateFormat(nameAndNumber) {
    if (!VALUE.menu.format.test(nameAndNumber)) {
      throw new Error(MESSAGE.error.menu);
    }
  }

  static #validateNotExistMenu(name, allMenuNames) {
    if (!allMenuNames.includes(name)) {
      throw new Error(MESSAGE.error.menu);
    }
  }

  static #validateNumberOfMenus(number) {
    if (number < VALUE.menu.range.min) {
      throw new Error(MESSAGE.error.menu);
    }
  }

  #validateDuplication(name, number) {
    if (this.#menu.get(name)) {
      throw new Error(MESSAGE.error.menu);
    }

    this.#menu.set(name, number);
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
