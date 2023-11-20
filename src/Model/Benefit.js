import Util from '../Util/Util.js';
import VALUE from '../constants/value.js';

class Benefit {
  #benefit;

  constructor(date, menu, total, gift) {
    this.#benefit = new Map();
    this.#applyBenefit(date, menu, total, gift);
  }

  findOutTotalBenefitInfo() {
    const total = this.#calculateTotalBenefit();

    return { benefit: total, benefitString: Util.convertCurrencyUnit(total) };
  }

  findOutBenefitDetail() {
    if (this.#benefit.size > 0) {
      const benefitDetail = [...this.#benefit].map(
        ([type, amount]) => `${type}: ${Util.convertCurrencyUnit(amount)}`,
      );

      return benefitDetail.join(VALUE.newline);
    }

    return VALUE.none;
  }

  #calculateTotalBenefit() {
    const total = [...this.#benefit.values()].reduce(
      (acc, amount) => acc + amount,
      0,
    );

    return total;
  }

  #applyBenefit(date, menu, total, gift) {
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
      this.#benefit.set(VALUE.benefit.gift, gift * -1);
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
