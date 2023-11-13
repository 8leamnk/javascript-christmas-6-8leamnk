import Total from '../../src/Model/Total.js';

describe('총주문 금액 계산 테스트', () => {
  test.each([
    [
      new Map([
        ['타파스', 1],
        ['티본스테이크', 1],
        ['해산물파스타', 1],
        ['레드와인', 1],
      ]),
      155500,
    ],
    [
      new Map([
        ['양송이수프', 5],
        ['크리스마스파스타', 2],
        ['티본스테이크', 2],
        ['레드와인', 5],
      ]),
      490000,
    ],
  ])('총주문 금액 계산', (input, output) => {
    // when
    const total = Total.calculateTotal(input);

    // then
    expect(total).toBe(output);
  });

  test.each([
    [70000, '70,000원'],
    [125000, '125,000원'],
    [6000, '6,000원'],
  ])('총주문 금액이 1,000원 단위의 화폐로 표시 된다.', (input, output) => {
    // when
    const totalString = Total.displayTotal(input);

    // then
    expect(totalString).toBe(output);
  });

  test.each([
    [56000, '50,000원'],
    [120000, '130,000원'],
    [8500, '8,000원'],
  ])(
    '총주문 금액이 1,000원 단위의 다른 금액으로 표시 되지 않는다.',
    (input, output) => {
      // when
      const totalString = Total.displayTotal(input);

      // then
      expect(totalString).not.toBe(output);
    },
  );
});
