import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printError(error) {
    Console.print(error.message);
  },

  printIntro() {
    Console.print(MESSAGE.output.intro);
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

  // ...
};

export default OutputView;
