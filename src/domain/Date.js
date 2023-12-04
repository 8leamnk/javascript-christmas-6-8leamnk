import Util from '../util/Util.js';
import MESSAGE from '../constants/message.js';

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
    if (this.#date < 1 || this.#date > 31) {
      throw new Error(MESSAGE.error.date);
    }
  }

  getDate() {
    return this.#date;
  }
}

export default Date;
