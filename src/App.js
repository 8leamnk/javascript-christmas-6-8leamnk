import Date from './domain/Date.js';
import Order from './domain/Order.js';
import Total from './domain/Total.js';
import Gift from './domain/Gift.js';
import Benefit from './domain/Benefit.js';
import EventResult from './domain/EventResult.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  constructor() {
    OutputView.printIntro();
  }

  async run() {
    const { date, orderMenu, total } = await this.#startEventPlanner();

    App.#showEventResult(date, orderMenu, total);
  }

  async #startEventPlanner() {
    const date = await this.#executeDate();
    const orderMenu = await this.#executeOrder();
    const total = new Total(orderMenu).getTotal();

    OutputView.printPreview(date);
    OutputView.printMenu(orderMenu);
    OutputView.printTotal(total);

    return { date, orderMenu, total };
  }

  static #showEventResult(date, orderMenu, total) {
    const { gift, giftContent } = new Gift(total).getGiftInfo();
    const benefitObj = new Benefit(date, orderMenu, total, gift);
    const { benefitContent, benefitTotal } = benefitObj.getBenefitInfo();
    const payment = EventResult.calculatePayment(total, benefitTotal, gift);
    const badge = EventResult.applyBadge(benefitTotal);

    OutputView.printGift(giftContent);
    OutputView.printBenefit(benefitContent);
    OutputView.printBenefitTotal(benefitTotal);
    OutputView.printPayment(payment);
    OutputView.printBadge(badge);
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
}

export default App;
