import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printError(error) {
    Console.print(error.message);
  },

  printIntro() {
    Console.print(MESSAGE.output.intro);
  },

  printPreview(date) {
    const day = `12월 ${date}일`;

    Console.print(`${day}${MESSAGE.output.preview}`);
  },

  printMenu() {
    Console.print(MESSAGE.output.order);
  },

  printTotal() {
    Console.print(MESSAGE.output.total);
  },

  printGift() {
    Console.print(MESSAGE.output.gift);
  },

  printBenefit() {
    Console.print(MESSAGE.output.benefit);
  },

  printBenefitTotal() {
    Console.print(MESSAGE.output.benefitTotal);
  },

  printPayment() {
    Console.print(MESSAGE.output.payment);
  },

  printBadge() {
    Console.print(MESSAGE.output.badge);
  },
};

export default OutputView;
