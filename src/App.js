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
  }

  async #executeDate() {
    try {
      const dateInput = await InputView.readDate();
      const date = Number(dateInput);
      const dateObject = new Date(date);
      const monthAndDay = dateObject.getMonthAndDay();

      return { date, monthAndDay };
    } catch (error) {
      OutputView.printError(error);
      return this.#executeDate();
    }
  }

  async #executeMenu() {
    try {
      const menuInput = await InputView.readMenu();
      const menuObject = new Menu(menuInput);
      const { menu, orderHistory } = menuObject.getMenu();

      return { menu, orderHistory };
    } catch (error) {
      OutputView.printError(error);
      return this.#executeMenu();
    }
  }

  static #executeTotal(menu) {
    const total = Total.calculateTotal(menu);
    const gift = Total.calculateGift(total);
    const totalString = Total.getTotalString(total);
    const giftDetail = Total.getGiftDetail(gift);

    OutputView.printTotal(totalString);
    OutputView.printGift(giftDetail);

    return { total, gift };
  }

  static #executeBenefit(date, menu, total, gift) {
    const benefitObject = new Benefit(date, menu, total, gift);
    const { benefit, benefitString } = benefitObject.getBenefit();
    const benefitDetail = benefitObject.getBenefitDetail();
    const payment = Benefit.getPayment(total, benefit, gift);

    OutputView.printBenefitDetail(benefitDetail);
    OutputView.printBenefit(benefitString);
    OutputView.printPayment(payment);

    return benefit;
  }
}

export default App;
