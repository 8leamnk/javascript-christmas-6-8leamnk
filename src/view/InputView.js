import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readDate() {
    const answer = await Console.readLineAsync(MESSAGE.input.date);

    return answer;
  },

  async readOrder() {
    const answer = await Console.readLineAsync(MESSAGE.input.order);

    return answer;
  },
};

export default InputView;
