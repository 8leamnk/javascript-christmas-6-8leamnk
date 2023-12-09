import Total from '../../src/domain/Total';

describe('총주문 금액 테스트', () => {
  test('할인 전 총주문 금액 계산 테스트', () => {
    // given
    const MENU = new Map([
      ['양송이수프', 1],
      ['티본스테이크', 1],
      ['해산물파스타', 1],
      ['초코케이크', 1],
      ['아이스크림', 1],
      ['제로콜라', 1],
    ]);
    const OUTPUT = 119000;

    // when
    const total = new Total(MENU).getTotal();

    // then
    expect(total).toBe(OUTPUT);
  });
});
