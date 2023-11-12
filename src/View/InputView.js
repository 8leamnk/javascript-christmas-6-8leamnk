import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(
      `${MESSAGE.input.date}${MESSAGE.newline}`,
    );

    return input;
  },

  async readMenu() {
    const input = await Console.readLineAsync(
      `${MESSAGE.input.menu}${MESSAGE.newline}`,
    );

    return input;
  },
};

export default InputView;
