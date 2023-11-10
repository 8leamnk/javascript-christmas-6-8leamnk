import Date from './Date.js';
import Menu from './Menu.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    OutputView.printIntro();

    const date = await this.#executeDate();
    const menu = await this.#executeMenu();
  }

  async #executeDate() {
    try {
      const dateInput = await InputView.readDate();
      const date = Number(dateInput);
      const dateObject = new Date(date);

      dateObject.validate();

      return date;
    } catch (error) {
      OutputView.printError(error);
      return this.#executeDate();
    }
  }

  async #executeMenu() {
    try {
      const menuInput = await InputView.readMenu();
      const menuObject = new Menu();
      const menu = menuObject.validate(menuInput);

      OutputView.printMenu(menuObject.arrangeOrderHistory());

      return menu;
    } catch (error) {
      OutputView.printError(error);
      return this.#executeMenu();
    }
  }
}

export default App;
