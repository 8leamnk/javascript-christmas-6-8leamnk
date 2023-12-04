import Total from '../../src/domain/Total';

describe('총주문 금액 테스트', () => {
  test('메뉴에 맞는 금액을 찾아 총주문 금액을 계산한다.', () => {
    // given
    const MENU = new Map([
      ['티본스테이크', 1],
      ['바비큐립', 1],
      ['초코케이크', 2],
      ['제로콜라', 1],
    ]);
    const OUTPUT = 142000;

    // when
    const total = new Total(MENU).getTotal();

    // then
    expect(total).toBe(OUTPUT);
  });
});
