import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printError(error) {
    Console.print(error.message);
  },

  printIntro() {
    Console.print(MESSAGE.output.intro);
  },

  printMenu() {
    Console.print('<주문 메뉴>');
    // ...
  },
  // ...
};

export default OutputView;
