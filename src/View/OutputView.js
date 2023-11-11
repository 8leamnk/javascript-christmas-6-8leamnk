import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printError(error) {
    Console.print(error.message);
  },

  printIntro() {
    Console.print(MESSAGE.output.intro);
  },

  printPreview(monthAndDay) {
    Console.print(`${monthAndDay}${MESSAGE.output.preview}`);
  },

  printMenu(orderHistory) {
    Console.print(MESSAGE.output.menu);
    Console.print(orderHistory);
  },

  printTotal(total) {
    Console.print(MESSAGE.output.total);
    Console.print(total);
  },

  printGift(gift) {
    Console.print(MESSAGE.output.gift);
    Console.print(gift);
  },

  printBenefitDetail(benefitDetail) {
    Console.print(MESSAGE.output.benefitDetail);
    Console.print(benefitDetail);
  },

  printBenefit(benefit) {
    Console.print(MESSAGE.output.benefit);
    Console.print(benefit);
  },

  printPayment(payment) {
    Console.print(MESSAGE.output.payment);
    Console.print(payment);
  },

  printBadge(badge) {
    Console.print(MESSAGE.output.badge);
    Console.print(badge);
  },
};

export default OutputView;
