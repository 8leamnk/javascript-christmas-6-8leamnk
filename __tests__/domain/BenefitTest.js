import Benefit from '../../src/domain/Benefit';

describe('혜택 내역 테스트', () => {
  test('각 이벤트가 적용되는지 테스트', () => {
    // given
    const DATE = 3;
    const MENU = new Map([
      ['티본스테이크', 1],
      ['바비큐립', 1],
      ['초코케이크', 2],
      ['제로콜라', 1],
    ]);
    const TOTAL = 142000;
    const BENEFIT_DETAILS = new Map([
      ['크리스마스 디데이 할인', -1200],
      ['평일 할인', -4046],
      ['특별 할인', -1000],
      ['증정 이벤트', -25000],
    ]);
    const GIFT = new Map([['샴페인', 1]]);
    const TOTAL_BENEFIT = -31246;

    // when
    const benefit = new Benefit(DATE, MENU, TOTAL);
    const benefitDetails = benefit.getBenefitDetails();
    const gift = benefit.getGift();
    const totalBenefit = benefit.getTotalBenefit();

    // then
    expect(benefitDetails).toEqual(BENEFIT_DETAILS);
    expect(gift).toEqual(GIFT);
    expect(totalBenefit).toBe(TOTAL_BENEFIT);
  });

  test('각 이벤트가 적용되지 않는지 테스트', () => {
    // given
    const DATE = 26;
    const MENU = new Map([
      ['타파스', 1],
      ['제로콜라', 1],
    ]);
    const TOTAL = 8500;
    const BENEFIT_DETAILS = new Map();
    const GIFT = new Map();
    const TOTAL_BENEFIT = 0;

    // when
    const benefit = new Benefit(DATE, MENU, TOTAL);
    const benefitDetails = benefit.getBenefitDetails();
    const gift = benefit.getGift();
    const totalBenefit = benefit.getTotalBenefit();

    // then
    expect(benefitDetails).toEqual(BENEFIT_DETAILS);
    expect(gift).toEqual(GIFT);
    expect(totalBenefit).toBe(TOTAL_BENEFIT);
  });
});
