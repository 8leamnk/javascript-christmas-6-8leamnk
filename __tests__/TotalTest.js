import Total from '../src/Total.js';

describe('Total 클래스를 테스트', () => {
  test('총주문 금액 계산', () => {
    // given
    const menu = new Map([
      ['타파스', 1],
      ['티본스테이크', 1],
      ['해산물파스타', 1],
      ['레드와인', 1],
    ]);
    const OUTPUT = 155500;

    // when
    const total = Total.calculateTotal(menu);

    // then
    expect(total).toBe(OUTPUT);
  });

  test('총주문 금액이 1,000원 단위의 화폐로 표시 된다.', () => {
    // given
    const INPUT = 70000;
    const OUTPUT = '70,000원';

    // when
    const totalString = Total.displayTotal(INPUT);

    // then
    expect(totalString).toBe(OUTPUT);
  });
});
