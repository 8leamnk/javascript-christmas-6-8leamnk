import Total from '../src/Total.js';

describe('Total 클래스를 테스트', () => {
  test('총주문 금액이 120,000원 이상이면 증정 이벤트가 적용된다.', () => {
    // given
    const TOTAL = 120000;
    const GIFT = 25000;
    const GIFT_DETAIL = '샴페인 1개';

    // when
    const gift = Total.calculateGift(TOTAL);
    const giftDetail = Total.getGiftDetail(gift);

    // then
    expect(gift).toBe(GIFT);
    expect(giftDetail).toBe(GIFT_DETAIL);
  });

  test('총주문 금액이 120,000원 미만이면 증정 이벤트가 없다.', () => {
    // given
    const TOTAL = 119000;
    const GIFT = 0;
    const GIFT_DETAIL = '없음';

    // when
    const gift = Total.calculateGift(TOTAL);
    const giftDetail = Total.getGiftDetail(gift);

    // then
    expect(gift).toBe(GIFT);
    expect(giftDetail).toBe(GIFT_DETAIL);
  });
});
