import convertCurrencyUnit from './utils/convertUtils.js';
import MESSAGE from './constants/message.js';
import VALUE from './constants/value.js';

class Benefit {
  #benefit;

  constructor(date, menu, total, gift) {
    this.#benefit = new Map();
    this.#applyBenefit(date, menu, total, gift);
  }

  getBenefit() {
    const benefit = [...this.#benefit.values()].reduce(
      (acc, amount) => acc + amount,
      0,
    );

    return { benefit, benefitString: `-${convertCurrencyUnit(benefit)}` };
  }

  static getPayment(total, benefit, gift) {
    const payment = total - benefit + gift;

    return convertCurrencyUnit(payment);
  }

  getBenefitDetail() {
    if (this.#benefit.size > 0) {
      const benefitDetail = [...this.#benefit].map(
        ([type, amount]) => `${type}: -${convertCurrencyUnit(amount)}\n`,
      );

      return benefitDetail.join('');
    }

    return MESSAGE.none;
  }

  #applyBenefit(date, menu, total, gift) {
    // 총주문 금액 10,000원 이상부터 이벤트가 적용 된다.
    if (total >= VALUE.discount.condition) {
      this.#applyDDayDiscount(date);
      this.#applySpecialDiscount(date);
      this.#applyGiftEvent(gift);
      this.#applyWeekDiscount(date, menu);
    }
  }

  #applyDDayDiscount(date) {
    if (date <= VALUE.date.christmasDay) {
      const { dday, ddayIncreaseAmount } = VALUE.discount;
      const amount = dday + (date - 1) * ddayIncreaseAmount;

      this.#benefit.set(VALUE.benefit.dday, amount);
    }
  }

  #applySpecialDiscount(date) {
    const { week, sunday, christmasDay } = VALUE.date;

    if (date % week === sunday || date === christmasDay) {
      this.#benefit.set(VALUE.benefit.special, VALUE.discount.special);
    }
  }

  #applyGiftEvent(gift) {
    if (gift > 0) {
      this.#benefit.set(VALUE.benefit.gift, gift);
    }
  }

  #applyWeekDiscount(date, menu) {
    const { week, friday, saturday } = VALUE.date;
    const { weekend, weekday } = VALUE.benefit;
    const { main, dessert } = VALUE.menu;

    menu.forEach((number, name) => {
      if (date % week === friday || date % week === saturday) {
        this.#claculateWeekDiscount(number, name, main, weekend);
      } else {
        this.#claculateWeekDiscount(number, name, dessert, weekday);
      }
    });
  }

  #claculateWeekDiscount(number, name, menuType, benefitType) {
    if (menuType.has(name)) {
      const currentAmount = this.#benefit.get(benefitType) || 0;
      const updatedAmount = currentAmount + VALUE.discount.week * number;

      this.#benefit.set(benefitType, updatedAmount);
    }
  }
}

export default Benefit;
