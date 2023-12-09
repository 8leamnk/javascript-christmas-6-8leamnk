import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message';

const InputView = {
  async readDate() {
    const answer = await Console.readLineAsync(MESSAGE.input.date);

    return answer;
  },

  async readMenu() {
    const answer = await Console.readLineAsync(MESSAGE.input.menu);

    return answer;
  },
};

export default InputView;
