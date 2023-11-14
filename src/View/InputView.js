import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(
      `${MESSAGE.input.date}${VALUE.newline}`,
    );

    return input;
  },

  async readMenu() {
    const input = await Console.readLineAsync(
      `${MESSAGE.input.menu}${VALUE.newline}`,
    );

    return input;
  },
};

export default InputView;
