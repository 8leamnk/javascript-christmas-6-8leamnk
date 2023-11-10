import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
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
