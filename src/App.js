import Date from './Model/Date.js';
import Menu from './Model/Menu.js';
import Total from './Model/Total.js';
import Gift from './Model/Gift.js';
import Benefit from './Model/Benefit.js';
import Payment from './Model/Payment.js';
import Badge from './Model/Badge.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import MESSAGE from './constants/message.js';

class App {
  async run() {
    OutputView.printOne(MESSAGE.output.intro, false);
    const { date, previewNotice } = await this.#executeDate();
    const { menu, orderHistory } = await this.#executeMenu();

    OutputView.printOne(previewNotice);
    OutputView.printMultiple([MESSAGE.output.menu, orderHistory]);
    const total = App.#executeTotal(menu);
    const gift = App.#executeGift(total);
    const benefit = App.#executeBenefit(date, menu, total, gift);
    App.#executePayment(total, benefit, gift);
    App.#executeBadge(benefit);
  }

  async #executeDate() {
    try {
      const dateInput = await InputView.readInput(MESSAGE.input.date);
      const dateObject = new Date(dateInput);

      return dateObject.findOutDateInfo();
    } catch (error) {
      OutputView.printError(error);
      return this.#executeDate();
    }
  }

  async #executeMenu() {
    try {
      const menuInput = await InputView.readInput(MESSAGE.input.menu);
      const menuObject = new Menu(menuInput);

      return menuObject.findOutMenuInfo();
    } catch (error) {
      OutputView.printError(error);
      return this.#executeMenu();
    }
  }

  static #executeTotal(menu) {
    const total = Total.calculateTotal(menu);
    const totalString = Total.displayTotal(total);

    OutputView.printMultiple([MESSAGE.output.total, totalString]);

    return total;
  }

  static #executeGift(total) {
    const gift = Gift.calculateGift(total);
    const giftDetail = Gift.findOutGiftDetail(gift);

    OutputView.printMultiple([MESSAGE.output.gift, giftDetail]);

    return gift;
  }

  static #executeBenefit(date, menu, total, gift) {
    const benefitObject = new Benefit(date, menu, total, gift);
    const { benefit, benefitString } = benefitObject.findOutTotalBenefitInfo();
    const benefitDetail = benefitObject.findOutBenefitDetail();

    OutputView.printMultiple([MESSAGE.output.benefitDetail, benefitDetail]);
    OutputView.printMultiple([MESSAGE.output.benefit, benefitString]);

    return benefit;
  }

  static #executePayment(total, benefit, gift) {
    const payment = Payment.calculatePayment(total, benefit, gift);

    OutputView.printMultiple([MESSAGE.output.payment, payment]);
  }

  static #executeBadge(benefit) {
    const badge = Badge.displayBadge(benefit);

    OutputView.printMultiple([MESSAGE.output.badge, badge], false);
  }
}

export default App;
