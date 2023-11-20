import Payment from '../../src/Model/Payment.js';

describe('할인 후 예상 결제 금액 기능 테스트', () => {
  test('할인 후 예상 결제 금액은 총주문 금액 - 할인 금액이다.', () => {
    // given
    const TOTAL = 150000;
    const BENEFIT = -29400;
    const GIFT = 25000;
    const OUTPUT = '145,600원';

    // when
    const payment = Payment.calculatePayment(TOTAL, BENEFIT, GIFT);

    // then
    expect(payment).toBe(OUTPUT);
  });

  test('할인 후 예상 결제 금액은 숫자형으로 반환되지 않는다.', () => {
    // given
    const TOTAL = 150000;
    const BENEFIT = -29400;
    const GIFT = 25000;
    const OUTPUT = 145600;

    // when
    const payment = Payment.calculatePayment(TOTAL, BENEFIT, GIFT);

    // then
    expect(payment).not.toBe(OUTPUT);
  });
});
