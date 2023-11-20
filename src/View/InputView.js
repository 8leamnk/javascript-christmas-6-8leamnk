import { Console } from '@woowacourse/mission-utils';
import VALUE from '../constants/value.js';

const InputView = {
  async readInput(message) {
    const input = await Console.readLineAsync(`${message}${VALUE.newline}`);

    return input;
  },
};

export default InputView;
