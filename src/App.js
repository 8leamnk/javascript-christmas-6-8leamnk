import Date from './Date.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    OutputView.printIntro();

    this.#executeDate();
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
}

export default App;
