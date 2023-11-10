class Menu {
  #menu;

  constructor() {
    this.#menu = new Map();
  }

  convertMenu(input) {
    input.split(/,\s|,/).forEach((menuAndNumber) => {
      const [menu, numberString] = menuAndNumber.split('-');

      this.#menu.set(menu, Number(numberString));
    });

    return this.#menu;
  }
}

export default Menu;
