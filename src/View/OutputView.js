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
    Console.print(`${monthAndDay}${MESSAGE.output.preview}${MESSAGE.newline}`);
  },

  printMenu(orderHistory) {
    Console.print(MESSAGE.output.menu);
    Console.print(`${orderHistory}${MESSAGE.newline}`);
  },

  printTotal(total) {
    Console.print(MESSAGE.output.total);
    Console.print(`${total}${MESSAGE.newline}`);
  },

  printGift(gift) {
    Console.print(MESSAGE.output.gift);
    Console.print(`${gift}${MESSAGE.newline}`);
  },

  printBenefitDetail(benefitDetail) {
    Console.print(MESSAGE.output.benefitDetail);
    Console.print(`${benefitDetail}${MESSAGE.newline}`);
  },

  printBenefit(benefit) {
    Console.print(MESSAGE.output.benefit);
    Console.print(`${benefit}${MESSAGE.newline}`);
  },

  printPayment(payment) {
    Console.print(MESSAGE.output.payment);
    Console.print(`${payment}${MESSAGE.newline}`);
  },

  printBadge(badge) {
    Console.print(MESSAGE.output.badge);
    Console.print(badge);
  },
};

export default OutputView;
