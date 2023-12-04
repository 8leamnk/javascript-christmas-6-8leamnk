import Util from '../util/Util.js';
import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

class Date {
  #date;

  constructor(answer) {
    this.#date = Number(answer);
    this.#validate(answer);
  }

  #validate(answer) {
    Util.validateNumber(answer, MESSAGE.error.date);
    this.#validateRange();
  }

  #validateRange() {
    const { start, end } = VALUE.dayRange;

    if (this.#date < start || this.#date > end) {
      throw new Error(MESSAGE.error.date);
    }
  }

  getDate() {
    return this.#date;
  }
}

export default Date;
