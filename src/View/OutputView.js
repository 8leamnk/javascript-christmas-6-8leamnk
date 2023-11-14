import { Console } from '@woowacourse/mission-utils';
import VALUE from '../constants/value.js';

const OutputView = {
  printOne(message, needNewline = true) {
    let output = message;

    if (needNewline) {
      output = `${message}${VALUE.newline}`;
    }

    Console.print(output);
  },

  printMultiple(messages, needNewline = true) {
    const lastIndex = messages.length - 1;

    messages.forEach((message, index) => {
      let output = message;

      if (needNewline && index === lastIndex) {
        output = `${message}${VALUE.newline}`;
      }

      Console.print(output);
    });
  },

  printError(error) {
    Console.print(error.message);
  },
};

export default OutputView;
