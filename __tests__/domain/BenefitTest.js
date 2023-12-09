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
    const OUTPUT = new Map([
      ['크리스마스 디데이 할인', -1200],
      ['평일 할인', -4046],
      ['특별 할인', -1000],
      ['증정 이벤트', -25000],
    ]);

    // when
    const benefitDetails = new Benefit(DATE, MENU, TOTAL).getBenefitDetails();

    // then
    expect(benefitDetails).toEqual(OUTPUT);
  });

  test('혜택 내역이 적용되지 않는지 테스트', () => {
    // given
    const DATE = 26;
    const MENU = new Map([
      ['타파스', 1],
      ['제로콜라', 1],
    ]);
    const TOTAL = 8500;
    const OUTPUT = new Map();

    // when
    const benefitDetails = new Benefit(DATE, MENU, TOTAL).getBenefitDetails();

    // then
    expect(benefitDetails).toEqual(OUTPUT);
  });
});
