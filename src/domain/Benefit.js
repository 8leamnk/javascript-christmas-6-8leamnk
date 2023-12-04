import Util from '../util/Util.js';
import VALUE from '../constants/value.js';

class Benefit {
  #benefit = new Map();

  constructor(date, orderMenu, total, gift) {
    this.#applyEvent(date, orderMenu, total, gift);
  }

  #applyEvent(date, orderMenu, total, gift) {
    if (total >= 10000) {
      this.#applyChristmasEvent(date);
      this.#applyWeekEvent(date, orderMenu);
      this.#applySpecailEvent(date);
      this.#applyGift(gift);
    }
  }

  #applyChristmasEvent(date) {
    if (date <= 25) {
      const discount = 1000 + (date - 1) * 100;

      this.#benefit.set(VALUE.eventType.dday, discount * -1);
    }
  }

  #applyWeekEvent(date, orderMenu) {
    const { weekday, weekend } = VALUE.eventType;

    if (date % 7 === 1 || date % 7 === 2) {
      this.#getWeekDiscount(orderMenu, VALUE.main, weekend);
    } else {
      this.#getWeekDiscount(orderMenu, VALUE.dessert, weekday);
    }
  }

  #getWeekDiscount(orderMenu, menu, type) {
    let discount = 0;

    orderMenu.forEach((number, name) => {
      if (menu.has(name)) {
        discount += number * 2023;
      }
    });

    this.#benefit.set(type, discount * -1);
  }

  #applySpecailEvent(date) {
    if (date % 7 === 3 || date === 25) {
      this.#benefit.set(VALUE.eventType.special, 1000 * -1);
    }
  }

  #applyGift(gift) {
    if (gift > 0) {
      this.#benefit.set(VALUE.eventType.gift, gift * -1);
    }
  }

  #getBenefitContent() {
    if (this.#benefit.size > 0) {
      const benefit = [];

      this.#benefit.forEach((discount, type) => {
        benefit.push(`${type}: ${Util.displayCurrency(discount)}`);
      });

      return benefit.join('\n');
    }

    return VALUE.none;
  }

  #getBenefitTotal() {
    if (this.#benefit.size > 0) {
      let sum = 0;

      this.#benefit.forEach((discount) => {
        sum += discount;
      });

      return sum;
    }

    return 0;
  }

  getBenefitInfo() {
    const benefitContent = this.#getBenefitContent();
    const benefitTotal = this.#getBenefitTotal();

    return { benefitContent, benefitTotal };
  }
}

export default Benefit;
