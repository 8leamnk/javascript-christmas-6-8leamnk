import EventResult from '../../src/domain/EventResult.js';

describe('이벤트 결과 클래스 테스트', () => {
  test('할인 후 예상 결제 금액 = 할인 전 총주문 금액 - 할인 금액', () => {
    // given
    const TOTAL = 30000;
    const BENEFIT_TOTAL = -26000;
    const GIFT = 25000;
    const OUTPUT = 29000;

    // when
    const payment = EventResult.calculatePayment(TOTAL, BENEFIT_TOTAL, GIFT);

    // then
    expect(payment).toBe(OUTPUT);
  });
});
