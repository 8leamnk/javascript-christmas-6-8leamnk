import MESSAGE from './constants/message.js';

class Date {
  #date;

  constructor(date) {
    this.#date = date;
  }

  validate() {
    this.#validateNumber();
    this.#validateRange();
  }

  #validateNumber() {
    if (!Number.isSafeInteger(this.#date)) {
      throw new Error(MESSAGE.error.date);
    }
  }

  #validateRange() {
    if (this.#date < 1 || this.#date > 31) {
      throw new Error(MESSAGE.error.date);
    }
  }
}

export default Date;
