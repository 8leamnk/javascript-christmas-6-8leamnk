import { Console } from '@woowacourse/mission-utils';
import Util from '../util/Util.js';
import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

const OutputView = {
  printError(error) {
    Console.print(error.message);
  },

  printIntro() {
    Console.print(MESSAGE.output.intro);
  },

  printPreview(date) {
    const { month, unit } = VALUE;
    const monthAndDay = `${month.December}${unit.month} ${date}${unit.day}`;

    Console.print(`${monthAndDay}${MESSAGE.output.preview}`);
  },

  printMenu(orderMenu) {
    Console.print(MESSAGE.output.order);

    orderMenu.forEach((number, name) => {
      Console.print(`${name} ${number}${VALUE.unit.number}`);
    });
  },

  printTotal(total) {
    Console.print(MESSAGE.output.total);
    Console.print(Util.displayCurrency(total));
  },

  printGift(giftContent) {
    Console.print(MESSAGE.output.gift);
    Console.print(giftContent);
  },

  printBenefit(benefitContent) {
    Console.print(MESSAGE.output.benefit);
    Console.print(benefitContent);
  },

  printBenefitTotal(benefitTotal) {
    Console.print(MESSAGE.output.benefitTotal);
    Console.print(Util.displayCurrency(benefitTotal));
  },

  printPayment(payment) {
    Console.print(MESSAGE.output.payment);
    Console.print(Util.displayCurrency(payment));
  },

  printBadge(badge) {
    Console.print(MESSAGE.output.badge);
    Console.print(badge);
  },
};

export default OutputView;
