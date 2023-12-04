import Date from './domain/Date.js';
import Gift from './domain/Gift.js';
import Order from './domain/Order.js';
import Total from './domain/Total.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView';

class App {
  async run() {
    const date = await this.#executeDate();
    const orderMenu = await this.#executeOrder();
    const total = new Total(orderMenu).getTotal();
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

  async #executeOrder() {
    try {
      const answer = await InputView.readOrder();
      const orderMenu = new Order(answer).getOrderMenu();

      return orderMenu;
    } catch (error) {
      OutputView.printError(error);
      return this.#executeOrder();
    }
  }

  #applyEvent(total) {
    const { gift, giftContent } = new Gift(total).getGiftInfo();
  }
}

export default App;
