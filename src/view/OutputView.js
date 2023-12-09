import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import Util from '../util/Util.js';

const OutputView = {
  FORMAT: {
    December: 12,
    month: '월',
    day: '일',
    won: '원',
    number: '개',
    colon: ':',
    none: '없음',
  },

  printError(error) {
    Console.print(error.message);
  },

  printNone() {
    Console.print(this.FORMAT.none);
  },

  printPrice(price) {
    Console.print(`${Util.convertToCurrency(price)}${this.FORMAT.won}`);
  },

  printIntro() {
    Console.print(MESSAGE.output.intro);
  },

  printNotice(date) {
    const { December, month, day } = this.FORMAT;
    Console.print(`${December}${month} ${date}${day}${MESSAGE.output.notice}`);
  },

  printMenu(orderMenu) {
    Console.print(MESSAGE.output.orderMenu);
    orderMenu.forEach((number, menu) => {
      Console.print(`${menu} ${number}${this.FORMAT.number}`);
    });
  },

  printTotal(total) {
    Console.print(MESSAGE.output.total);
    this.printPrice(total);
  },

  printGift(gift) {
    Console.print(MESSAGE.output.gift);

    if (gift.size > 0) {
      gift.forEach((number, type) => {
        Console.print(`${type} ${number}${this.FORMAT.number}`);
      });
    } else {
      this.printNone();
    }
  },

  printBenefitDetails(benefitDetails) {
    Console.print(MESSAGE.output.details);

    if (benefitDetails.size > 0) {
      benefitDetails.forEach((discount, type) => {
        const detail = `${type}${this.FORMAT.colon} ${Util.convertToCurrency(
          discount,
        )}${this.FORMAT.won}`;
        Console.print(detail);
      });
    } else {
      this.printNone();
    }
  },

  printTotalBenefit(totalBenefit) {
    Console.print(MESSAGE.output.totalBenefit);
    this.printPrice(totalBenefit);
  },

  printPayment(paymnet) {
    Console.print(MESSAGE.output.payment);
    this.printPrice(paymnet);
  },

  printBadge(badge) {
    Console.print(MESSAGE.output.badge);

    if (badge.length > 0) {
      Console.print(badge);
    } else {
      this.printNone();
    }
  },
};

export default OutputView;
