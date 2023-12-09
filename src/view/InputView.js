import { Console } from '@woowacourse/mission-utils';
import Date from '../domain/Date.js';
import OutputView from './OutputView.js';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readDate() {
    try {
      const answer = await Console.readLineAsync(MESSAGE.input.date);
      const date = new Date(answer).getDate();

      return date;
    } catch (error) {
      OutputView.printError(error);
      return this.readDate();
    }
  },

  async readMenu() {
    try {
      const answer = await Console.readLineAsync(MESSAGE.input.menu);

      return answer;
    } catch (error) {
      OutputView.printError(error);
      return this.readMenu();
    }
  },
};

export default InputView;
