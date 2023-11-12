import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

class Date {
  #date;

  constructor(dateInput) {
    this.#date = Number(dateInput);
    this.#validate();
  }

  findOutDateInfo() {
    const date = this.#date;
    const monthAndDay = this.#findOutMonthAndDay();

    return { date, monthAndDay };
  }

  #findOutMonthAndDay() {
    const monthAndDay = `${VALUE.month}${VALUE.unit.month} ${this.#date}${
      VALUE.unit.date
    }`;

    return monthAndDay;
  }

  #validate() {
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
