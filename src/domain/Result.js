const Result = {
  BADGE: [
    ['산타', 20000],
    ['트리', 10000],
    ['별', 5000],
  ],

  calculatePayment(total, discount) {
    return total + discount;
  },

  findOutBadge(totalBenefit) {
    for (let index = 0; index < this.BADGE.length; index += 1) {
      const [badge, amount] = this.BADGE[index];

      if (totalBenefit * -1 >= amount) {
        return badge;
      }
    }

    return '';
  },
};

export default Result;
