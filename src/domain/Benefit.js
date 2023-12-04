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

      this.#benefit.set('크리스마스 디데이 할인', discount * -1);
    }
  }

  #applyWeekEvent(date, orderMenu) {
    if (date % 7 === 1 || date % 7 === 2) {
      this.#getWeekDiscount(orderMenu, VALUE.main, '주말 할인');
    } else {
      this.#getWeekDiscount(orderMenu, VALUE.dessert, '평일 할인');
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
      this.#benefit.set('특별 할인', 1000 * -1);
    }
  }

  #applyGift(gift) {
    if (gift > 0) {
      this.#benefit.set('증정 이벤트', gift * -1);
    }
  }

  getBenefit() {
    if (this.#benefit.size > 0) {
      return this.#benefit;
    }

    return VALUE.none;
  }

  getBenefitTotal() {
    if (this.#benefit.size > 0) {
      let sum = 0;

      this.#benefit.forEach((discount) => {
        sum += discount;
      });

      return sum;
    }

    return 0;
  }
}

export default Benefit;
