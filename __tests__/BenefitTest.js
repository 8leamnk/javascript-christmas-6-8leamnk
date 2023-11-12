import Benefit from '../src/Benefit.js';

describe('혜택 클래스 테스트', () => {
  const DATE = 25;
  const menu = new Map([
    ['티본스테이크', 1],
    ['초코케이크', 2],
    ['레드와인', 1],
  ]);
  const TOTAL = 130000;
  const GIFT = 25000;

  test('혜택 금액이 올바르게 계산 된다.', () => {
    // given
    const OUTPUT = '-33,446원';

    // when
    const benefitObj = new Benefit(DATE, menu, TOTAL, GIFT);
    const { benefitString } = benefitObj.findOutTotalBenefitInfo();

    // then
    expect(benefitString).toBe(OUTPUT);
  });

  test('혜택 내역이 올바르게 반환 된다.', () => {
    // given
    const output = [
      '크리스마스 디데이 할인: -3,400원\n',
      '특별 할인: -1,000원\n',
      '증정 이벤트: -25,000원\n',
      '평일 할인: -4,046원\n',
    ];

    // when
    const benefitObj = new Benefit(DATE, menu, TOTAL, GIFT);
    const benefit = benefitObj.findOutBenefitDetail();

    // then
    expect(benefit).toEqual(output.join(''));
  });
});
