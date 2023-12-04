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
    const OUTPUT = new Map([
      ['크리스마스 디데이 할인', -1200],
      ['평일 할인', -4046],
      ['특별 할인', -1000],
      ['증정 이벤트', -25000],
    ]);
    const OUTPUT_TOTAL = -31246;

    // when
    const benefitInfo = new Benefit(DATE, MENU, TOTAL, GIFT);
    const benefit = benefitInfo.getBenefit();
    const benefitTotal = benefitInfo.getBenefitTotal();

    // then
    expect(benefit).toEqual(OUTPUT);
    expect(benefitTotal).toBe(OUTPUT_TOTAL);
  });
});
