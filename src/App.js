import Total from './domain/Total.js';
import Benefit from './domain/Benefit.js';
import Result from './domain/Result.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #date;

  #orderMenu;

  #total;

  constructor() {
    OutputView.printIntro();
  }

  async run() {
    await this.#order();
  }

  async #order() {
    this.#date = await InputView.readDate();
    this.#orderMenu = await InputView.readMenu();
    this.#total = new Total(this.#orderMenu).getTotal();

    OutputView.printNotice(this.#date);
    OutputView.printMenu(this.#orderMenu);
    OutputView.printTotal(this.#total);
    this.#applyEvent();
  }

  #applyEvent() {
    const benefit = new Benefit(this.#date, this.#orderMenu, this.#total);
    const gift = benefit.getGift();
    const benefitDetails = benefit.getBenefitDetails();
    const totalBenefit = benefit.getTotalBenefit();
    const discount = benefit.getDiscount();

    OutputView.printGift(gift);
    OutputView.printBenefitDetails(benefitDetails);
    OutputView.printTotalBenefit(totalBenefit);
    this.#getResult(totalBenefit, discount);
  }

  #getResult(totalBenefit, discount) {
    const payment = Result.calculatePayment(this.#total, discount);
    const badge = Result.findOutBadge(totalBenefit);

    OutputView.printPayment(payment);
    OutputView.printBadge(badge);
  }
}

export default App;
