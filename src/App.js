import Date from './Date.js';
import Menu from './Menu.js';
import Total from './Total.js';
import Benefit from './Benefit.js';
import Badge from './Badge.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    OutputView.printIntro();

    const { date, monthAndDay } = await this.#executeDate();
    const { menu, orderHistory } = await this.#executeMenu();

    OutputView.printPreview(monthAndDay);
    OutputView.printMenu(orderHistory);

    const { total, gift } = App.#executeTotal(menu);
    const benefit = App.#executeBenefit(date, menu, total, gift);

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
    const gift = Total.calculateGift(total);
    const totalString = Total.displayTotal(total);
    const giftDetail = Total.findOutGiftDetail(gift);

    OutputView.printTotal(totalString);
    OutputView.printGift(giftDetail);

    return { total, gift };
  }

  static #executeBenefit(date, menu, total, gift) {
    const benefitObject = new Benefit(date, menu, total, gift);
    const { benefit, benefitString } = benefitObject.calculateTotalBenefit();
    const benefitDetail = benefitObject.findOutBenefitDetail();
    const payment = Benefit.calculatePayment(total, benefit, gift);

    OutputView.printBenefitDetail(benefitDetail);
    OutputView.printBenefit(benefitString);
    OutputView.printPayment(payment);

    return benefit;
  }

  static #executeBadge(benefit) {
    const badge = Badge.getBadge(benefit);

    OutputView.printBadge(badge);
  }
}

export default App;
