import VALUE from '../constants/value.js';

const EventResult = {
  calculatePayment(total, benefitTotal, gift) {
    return total + benefitTotal + gift;
  },

  applyBadge(benefitTotal) {
    for (let index = 0; index < VALUE.badge.length; index += 1) {
      const [type, amount] = VALUE.badge[index];

      if (benefitTotal * -1 >= amount) {
        return type;
      }
    }

    return VALUE.none;
  },
};

export default EventResult;
