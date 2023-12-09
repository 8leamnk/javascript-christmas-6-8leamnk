import Result from '../../src/domain/Result.js';

describe('이벤트가 적용된 결과 테스트', () => {
  test('할인 후 예상 결제 금액 계산 테스트', () => {
    // given
    const TOTAL = 70000;
    const DISCOUNT = -3200;
    const OUTPUT = 66800;

    // when
    const payment = Result.calculatePayment(TOTAL, DISCOUNT);

    // then
    expect(payment).toBe(OUTPUT);
  });
});
