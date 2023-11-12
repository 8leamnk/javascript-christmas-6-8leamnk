import Date from './Model/Date.js';
import Menu from './Model/Menu.js';
import Total from './Model/Total.js';
import Gift from './Model/Gift.js';
import Benefit from './Model/Benefit.js';
import Payment from './Model/Payment.js';
import Badge from './Model/Badge.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    OutputView.printIntro();
    const { date, monthAndDay } = await this.#executeDate();
    const { menu, orderHistory } = await this.#executeMenu();

    OutputView.printPreview(monthAndDay);
    OutputView.printMenu(orderHistory);
    const total = App.#executeTotal(menu);
    const gift = App.#executeGift(total);
    const benefit = App.#executeBenefit(date, menu, total, gift);
    App.#executePayment(total, benefit, gift);
    App.#executeBadge(benefit);
  }

  async #executeDate() {
    try {
      const dateInput = await InputView.readDate();
      const dateObject = new Date(dateInput);

      return dateObject.findOutDateInfo();
    } catch (error) {
      OutputView.printError(error);
      return this.#executeDate();
    }
  }

  async #executeMenu() {
    try {
      const menuInput = await InputView.readMenu();
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

    OutputView.printTotal(totalString);

    return total;
  }

  static #executeGift(total) {
    const gift = Gift.calculateGift(total);
    const giftDetail = Gift.findOutGiftDetail(gift);

    OutputView.printGift(giftDetail);

    return gift;
  }

  static #executeBenefit(date, menu, total, gift) {
    const benefitObject = new Benefit(date, menu, total, gift);
    const { benefit, benefitString } = benefitObject.findOutTotalBenefitInfo();
    const benefitDetail = benefitObject.findOutBenefitDetail();

    OutputView.printBenefitDetail(benefitDetail);
    OutputView.printBenefit(benefitString);

    return benefit;
  }

  static #executePayment(total, benefit, gift) {
    const payment = Payment.calculatePayment(total, benefit, gift);

    OutputView.printPayment(payment);
  }

  static #executeBadge(benefit) {
    const badge = Badge.getBadge(benefit);

    OutputView.printBadge(badge);
  }
}

export default App;
