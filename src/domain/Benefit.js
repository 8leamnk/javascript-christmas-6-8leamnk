import Util from '../util/Util.js';
import VALUE from '../constants/value.js';

class Benefit {
  static #CONDITION = {
    applyEvent: 10000,
    weekday: [0, 3, 4, 5, 6],
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

    if (Benefit.#CONDITION.weekday.includes(rest)) {
      const discount = Benefit.#getWeekDiscount(orderManu, VALUE.dessert);
      this.#benefitDetails.set(Benefit.#EVENT_KEY.weekday, discount * -1);
    } else {
      const discount = Benefit.#getWeekDiscount(orderManu, VALUE.main);
      this.#benefitDetails.set(Benefit.#EVENT_KEY.weekend, discount * -1);
    }
  }

  static #getWeekDiscount(orderManu, menu) {
    let count = 0;

    orderManu.forEach((number, type) => {
      if (menu.has(type)) {
        count += number;
      }
    });

    return count * Benefit.#STANDARD.week;
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
      });

      this.#benefitDetails.set(Benefit.#EVENT_KEY.gift, discount * -1);
    }
  }

  getBenefitDetails() {
    return this.#benefitDetails;
  }

  static getGift() {
    return Benefit.#STANDARD.gift;
  }
}

export default Benefit;
