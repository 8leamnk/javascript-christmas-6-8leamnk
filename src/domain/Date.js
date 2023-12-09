import Util from '../util/Util.js';
import MESSAGE from '../constants/message.js';

class Date {
  static #RANGE = { min: 1, max: 31 };

  #date;

  constructor(answer) {
    this.#date = Number(answer);
    this.#validate(answer);
  }

  #validate(answer) {
    Util.validateNumber(answer);
    this.#validateRange();
  }

  #validateRange() {
    const { min, max } = Date.#RANGE;

    if (this.#date < min || this.#date > max) {
      throw new Error(MESSAGE.error.date);
    }
  }

  getDate() {
    return this.#date;
  }
}

export default Date;
