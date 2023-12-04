import Date from './domain/Date.js';
import Order from './domain/Order.js';
import Total from './domain/Total.js';
import Gift from './domain/Gift.js';
import Benefit from './domain/Benefit.js';
import EventResult from './domain/EventResult.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView';

class App {
  async run() {
    const date = await this.#executeDate();
    const orderMenu = await this.#executeOrder();
    const total = new Total(orderMenu).getTotal();

    App.#applyEvent(date, orderMenu, total);
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

  static #applyEvent(date, orderMenu, total) {
    const { gift, giftContent } = new Gift(total).getGiftInfo();
    const benefitInfo = new Benefit(date, orderMenu, total, gift);
    const { benefitContent, benefitTotal } = benefitInfo;
    const payment = EventResult.calculatePayment(total, benefitTotal, gift);
  }
}

export default App;
