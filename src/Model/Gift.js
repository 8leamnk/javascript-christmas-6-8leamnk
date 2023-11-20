import VALUE from '../constants/value.js';

const Gift = {
  calculateGift(total) {
    const giftType = VALUE.gift.detail.split(' ').at(0);
    let gift = 0;

    if (total >= VALUE.gift.condition) {
      gift += VALUE.menu.drink.get(giftType);
    }

    return gift;
  },

  findOutGiftDetail(gift) {
    if (gift > 0) {
      return VALUE.gift.detail;
    }

    return VALUE.none;
  },
};

export default Gift;
