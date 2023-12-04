const Util = {
  validateNumber(answer, message) {
    const REG_EXP = /[^0-9]/;

    if (REG_EXP.test(answer)) {
      throw new Error(message);
    }
  },
};

export default Util;
