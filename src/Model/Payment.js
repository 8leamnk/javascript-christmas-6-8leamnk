import Util from '../Util/Util.js';

const Payment = {
  calculatePayment(total, benefit, gift) {
    const payment = total + benefit + gift;

    return Util.convertCurrencyUnit(payment);
  },
};

export default Payment;
