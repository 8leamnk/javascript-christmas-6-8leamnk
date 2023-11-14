import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

const OutputView = {
  printError(error) {
    Console.print(error.message);
  },

  printIntro() {
    Console.print(MESSAGE.output.intro);
  },

  printPreview(monthAndDay) {
    Console.print(`${monthAndDay}${MESSAGE.output.preview}${VALUE.newline}`);
  },

  printMenu(orderHistory) {
    Console.print(MESSAGE.output.menu);
    Console.print(`${orderHistory}${VALUE.newline}`);
  },

  printTotal(total) {
    Console.print(MESSAGE.output.total);
    Console.print(`${total}${VALUE.newline}`);
  },

  printGift(gift) {
    Console.print(MESSAGE.output.gift);
    Console.print(`${gift}${VALUE.newline}`);
  },

  printBenefitDetail(benefitDetail) {
    Console.print(MESSAGE.output.benefitDetail);
    Console.print(`${benefitDetail}${VALUE.newline}`);
  },

  printBenefit(benefit) {
    Console.print(MESSAGE.output.benefit);
    Console.print(`${benefit}${VALUE.newline}`);
  },

  printPayment(payment) {
    Console.print(MESSAGE.output.payment);
    Console.print(`${payment}${VALUE.newline}`);
  },

  printBadge(badge) {
    Console.print(MESSAGE.output.badge);
    Console.print(badge);
  },
};

export default OutputView;
