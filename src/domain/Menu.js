import Util from '../util/Util.js';
import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

class Menu {
  static #FORMAT = {
    not: /[^가-힣|0-9|\-|,]/,
    comma: ',',
    hypen: '-',
    number: 1,
    totalNumber: 20,
  };

  #orderMenu = new Map();

  constructor(answer) {
    this.#validate(answer);
  }

  #validate(answer) {
    Menu.#validateFormat(answer);

    answer.split(Menu.#FORMAT.comma).forEach((menuAndNumber) => {
      this.#validateOneMenu(menuAndNumber);
    });

    this.#validateOnlyBeverage();
    this.#validateMenuNumber();
  }

  #validateOneMenu(menuAndNumber) {
    const [menu, numberString] = menuAndNumber.split(Menu.#FORMAT.hypen);
    const number = Number(numberString);

    Menu.#validateMenu(menu);
    Menu.#validateRange(number);
    this.#validateDuplication(menu, number);
  }

  static #validateMenu(menu) {
    const allMenus = Util.getAllMenus();

    if (!allMenus.has(menu)) {
      throw new Error(MESSAGE.error.menu);
    }
  }

  static #validateRange(number) {
    if (!number || number < Menu.#FORMAT.number) {
      throw new Error(MESSAGE.error.menu);
    }
  }

  static #validateFormat(answer) {
    if (Menu.#FORMAT.not.test(answer)) {
      throw new Error(MESSAGE.error.menu);
    }
  }

  #validateDuplication(menu, number) {
    if (this.#orderMenu.has(menu)) {
      throw new Error(MESSAGE.error.menu);
    }

    this.#orderMenu.set(menu, number);
  }

  #validateOnlyBeverage() {
    const beverage = [...VALUE.beverage.keys()];
    const isOnlyBeverage = [...this.#orderMenu.keys()].every((menu) =>
      beverage.includes(menu),
    );

    if (isOnlyBeverage) {
      throw new Error(MESSAGE.error.onlyBeverage);
    }
  }

  #validateMenuNumber() {
    const totalNumber = [...this.#orderMenu.values()].reduce(
      (sum, number) => sum + number,
      0,
    );

    if (totalNumber > Menu.#FORMAT.totalNumber) {
      throw new Error(MESSAGE.error.menuNumber);
    }
  }

  getOrderMenu() {
    return this.#orderMenu;
  }
}

export default Menu;
