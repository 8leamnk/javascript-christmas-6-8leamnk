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

  // ...
};

export default OutputView;
