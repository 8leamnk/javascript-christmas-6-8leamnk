import Util from '../util/Util.js';
import VALUE from '../constants/value.js';

class Benefit {
  static #CONDITION = {
    applyEvent: 10000,
    weekend: [1, 2],
    special: 3,
    gift: 120000,
  };

  static #DAY = {
    christmas: 25,
    week: 7,
  };

  static #STANDARD = {
    initialDDay: 1000,
    increaseDDay: 100,
    week: 2023,
    special: 1000,
    gift: new Map([['샴페인', 1]]),
  };

  static #EVENT_KEY = {
    dday: '크리스마스 디데이 할인',
    weekday: '평일 할인',
    weekend: '주말 할인',
    special: '특별 할인',
    gift: '증정 이벤트',
  };

  #benefitDetails = new Map();

  #gift = new Map();

  constructor(date, orderManu, total) {
    this.#applyBenefits(date, orderManu, total);
  }

  #applyBenefits(date, orderManu, total) {
    if (total >= Benefit.#CONDITION.applyEvent) {
      this.#applyDDay(date);
      this.#applyWeek(date, orderManu);
      this.#applySpecial(date);
      this.#applyGift(total);
    }
  }

  #applyDDay(date) {
    if (date <= Benefit.#DAY.christmas) {
      const { initialDDay, increaseDDay } = Benefit.#STANDARD;
      const discount = initialDDay + (date - 1) * increaseDDay;

      this.#benefitDetails.set(Benefit.#EVENT_KEY.dday, discount * -1);
    }
  }

  #applyWeek(date, orderManu) {
    const rest = date % Benefit.#DAY.week;
    const { weekday, weekend } = Benefit.#EVENT_KEY;

    if (Benefit.#CONDITION.weekend.includes(rest)) {
      this.#getWeekDiscount(orderManu, VALUE.main, weekend);
    } else {
      this.#getWeekDiscount(orderManu, VALUE.dessert, weekday);
    }
  }

  #getWeekDiscount(orderManu, menuType, eventType) {
    let count = 0;

    orderManu.forEach((number, menu) => {
      if (menuType.has(menu)) {
        count += number;
      }
    });

    if (count > 0) {
      this.#benefitDetails.set(eventType, count * Benefit.#STANDARD.week * -1);
    }
  }

  #applySpecial(date) {
    const rest = date % Benefit.#DAY.week;

    if (
      rest === Benefit.#CONDITION.special ||
      date === Benefit.#DAY.christmas
    ) {
      this.#benefitDetails.set(
        Benefit.#EVENT_KEY.special,
        Benefit.#STANDARD.special * -1,
      );
    }
  }

  #applyGift(total) {
    if (total >= Benefit.#CONDITION.gift) {
      let discount = 0;

      Benefit.#STANDARD.gift.forEach((number, type) => {
        discount += Util.getAllMenus().get(type) * number;
        this.#gift.set(type, number);
      });

      this.#benefitDetails.set(Benefit.#EVENT_KEY.gift, discount * -1);
    }
  }

  getBenefitDetails() {
    return this.#benefitDetails;
  }

  getGift() {
    return this.#gift;
  }

  getTotalBenefit() {
    const total = [...this.#benefitDetails.values()].reduce(
      (sum, discount) => sum + (discount || 0),
      0,
    );

    return total;
  }

  getDiscount() {
    const giftKey = Benefit.#EVENT_KEY.gift;
    const gift = this.#benefitDetails.get(giftKey) || 0;

    return this.getTotalBenefit() - gift;
  }
}

export default Benefit;
