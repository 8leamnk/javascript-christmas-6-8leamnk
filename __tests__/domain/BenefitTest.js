import Benefit from '../../src/domain/Benefit.js';

describe('혜택 내역 클래스 테스트', () => {
  test('혜택 내역과 총혜택 금액이 올바르게 계산 된다.', () => {
    // given
    const DATE = 3;
    const MENU = new Map([
      ['티본스테이크', 1],
      ['바비큐립', 1],
      ['초코케이크', 2],
      ['제로콜라', 1],
    ]);
    const TOTAL = 142000;
    const GIFT = 25000;
    const OUTPUT =
      '크리스마스 디데이 할인: -1,200원\n평일 할인: -4,046원\n특별 할인: -1,000원\n증정 이벤트: -25,000원';
    const OUTPUT_TOTAL = -31246;

    // when
    const benefitInfo = new Benefit(DATE, MENU, TOTAL, GIFT);
    const { benefitContent, benefitTotal } = benefitInfo.getBenefitInfo();

    // then
    expect(benefitContent).toEqual(OUTPUT);
    expect(benefitTotal).toBe(OUTPUT_TOTAL);
  });

  test('총주문 금액이 10000원 미만이면 혜택이 없다.', () => {
    // given
    const DATE = 3;
    const MENU = new Map([
      ['아이스크림', 1],
      ['제로콜라', 1],
    ]);
    const TOTAL = 8000;
    const GIFT = 0;
    const OUTPUT = '없음';
    const OUTPUT_TOTAL = 0;

    // when
    const benefitInfo = new Benefit(DATE, MENU, TOTAL, GIFT);
    const { benefitContent, benefitTotal } = benefitInfo.getBenefitInfo();

    // then
    expect(benefitContent).toEqual(OUTPUT);
    expect(benefitTotal).toBe(OUTPUT_TOTAL);
  });
});
