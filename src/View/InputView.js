import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(MESSAGE.input.date);

    return input;
  },
  // ...
};

export default InputView;
