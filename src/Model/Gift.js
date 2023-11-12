import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

const Gift = {
  calculateGift(total) {
    const type = VALUE.gift.detail.split(' ').at(0);
    let gift = 0;

    if (total >= VALUE.gift.condition) {
      gift += VALUE.menu.drink.get(type);
    }

    return gift;
  },

  findOutGiftDetail(gift) {
    if (gift > 0) {
      return VALUE.gift.detail;
    }

    return MESSAGE.none;
  },
};

export default Gift;
