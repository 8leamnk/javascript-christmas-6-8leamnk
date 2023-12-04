import Gift from '../../src/domain/Gift.js';

describe('증정 내용 테스트', () => {
  test('총주문 금액이 12만원 미만이면 증정이 없다.', () => {
    // given
    const TOTAL = 58000;
    const OUTPUT = 0;
    const OUTPUT_CONTENT = '없음';

    // when
    const { gift, giftContent } = new Gift(TOTAL).getGiftInfo();

    // then
    expect(gift).toBe(OUTPUT);
    expect(giftContent).toBe(OUTPUT_CONTENT);
  });

  test('총주문 금액이 12만원 이상이면 샴페인 1개를 증정해준다.', () => {
    // given
    const TOTAL = 120000;
    const OUTPUT = 25000;
    const OUTPUT_CONTENT = '샴페인 1개';

    // when
    const { gift, giftContent } = new Gift(TOTAL).getGiftInfo();

    // then
    expect(gift).toBe(OUTPUT);
    expect(giftContent).toBe(OUTPUT_CONTENT);
  });
});
