import convertCurrencyUnit from './utils/convertUtils.js';

const Payment = {
  calculatePayment(total, benefit, gift) {
    const payment = total + benefit + gift;

    return convertCurrencyUnit(payment);
  },
};

export default Payment;
