import Date from './domain/Date.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView';

class App {
  async run() {
    const date = await this.#executeDate();
  }

  async #executeDate() {
    try {
      const answer = await InputView.readDate();
      const date = new Date(answer).getDate();

      return date;
    } catch (error) {
      OutputView.printError(error);
      return this.#executeDate();
    }
  }
}

export default App;
