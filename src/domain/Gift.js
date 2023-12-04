import VALUE from '../constants/value.js';
import Util from '../util/Util.js';

class Gift {
  #gift = 0;

  #giftContents = [];

  constructor(total) {
    this.#calculateGift(total);
  }

  #calculateGift(total) {
    const { condition, content } = VALUE.gift;
    const allMenus = Util.getAllMenus();

    if (total >= condition) {
      content.forEach((type, number) => {
        this.#gift = allMenus.get(type) * number;
        this.#giftContents.push(`${type} ${number}${VALUE.unit.number}`);
      });
    }
  }

  #getGiftContent() {
    if (this.#giftContents.length > 0) {
      return this.#giftContents.join(', ');
    }

    return VALUE.none;
  }

  getGiftInfo() {
    const giftContent = this.#getGiftContent();

    return { gift: this.#gift, giftContent };
  }
}

export default Gift;
