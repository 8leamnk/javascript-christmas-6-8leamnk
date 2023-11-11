import Date from './Date.js';
import Menu from './Menu.js';
import Total from './Total.js';
import Benefit from './Benefit.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import convertCurrencyUnit from './utils/convertUtils.js';

class App {
  async run() {
    OutputView.printIntro();

    const date = await this.#executeDate();
    const menu = await this.#executeMenu();

    const { total, gift } = App.#executeTotal(menu);
    const benefit = App.#executeBenefit(date, menu, total, gift);
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

  static #executeTotal(menu) {
    const total = Total.calculateTotal(menu);
    const gift = Total.calculateGift(total);
    const totalString = convertCurrencyUnit(total);
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
