import Benefit from '../../src/Model/Benefit.js';

describe('혜택 클래스 테스트', () => {
  const DATE = 25;
  const menu = new Map([
    ['티본스테이크', 1],
    ['초코케이크', 2],
    ['레드와인', 1],
  ]);
  const menuLessThan10000 = new Map([
    ['양송이수프', 1],
    ['제로콜라', 1],
  ]);
  const TOTAL = 145000;
  const TOTAL_LESS_THAN_10000 = 9000;
  const GIFT = 25000;
  const GIFT_LESS_THAN_10000 = 9000;

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
      '크리스마스 디데이 할인: -3,400원',
      '특별 할인: -1,000원',
      '증정 이벤트: -25,000원',
      '평일 할인: -4,046원',
    ];

    // when
    const benefitObj = new Benefit(DATE, menu, TOTAL, GIFT);
    const benefitDetail = benefitObj.findOutBenefitDetail();

    // then
    expect(benefitDetail).toEqual(output.join('\n'));
  });

  test('총주문 금액이 10,000원 미만이면 총혜택 금액이 0원으로 반환 된다.', () => {
    // given
    const OUPUT = '0원';

    // when
    const benefitObj = new Benefit(
      DATE,
      menuLessThan10000,
      TOTAL_LESS_THAN_10000,
      GIFT_LESS_THAN_10000,
    );
    const { benefitString } = benefitObj.findOutTotalBenefitInfo();

    // then
    expect(benefitString).toEqual(OUPUT);
  });

  test('총주문 금액이 10,000원 미만이면 혜택 내역이 없음으로 반환 된다.', () => {
    // given
    const OUPUT = '없음';

    // when
    const benefitObj = new Benefit(
      DATE,
      menuLessThan10000,
      TOTAL_LESS_THAN_10000,
      GIFT_LESS_THAN_10000,
    );
    const benefitDetail = benefitObj.findOutBenefitDetail();

    // then
    expect(benefitDetail).toEqual(OUPUT);
  });
});
