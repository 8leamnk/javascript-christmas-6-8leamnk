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
    const previewNotice = this.#findOutPreviewNotice();

    return { date, previewNotice };
  }

  #findOutPreviewNotice() {
    const previewNotice = `${VALUE.month}${VALUE.unit.month} ${this.#date}${
      VALUE.unit.date
    }${MESSAGE.output.preview}`;

    return previewNotice;
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
    if (
      this.#date < VALUE.date.range.min ||
      this.#date > VALUE.date.range.max
    ) {
      throw new Error(MESSAGE.error.date);
    }
  }
}

export default Date;
