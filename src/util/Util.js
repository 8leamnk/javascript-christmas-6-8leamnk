import MESSAGE from '../constants/message.js';

const Util = {
  NOT_NUMBER: /[^0-9]/,

  validateNumber(answer) {
    if (this.NOT_NUMBER.test(answer)) {
      throw new Error(MESSAGE.error.date);
    }
  },
};

export default Util;
