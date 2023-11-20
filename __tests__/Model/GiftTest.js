import Gift from '../../src/Model/Gift.js';

describe('Gift 클래스를 테스트', () => {
  test.each([
    [120000, 25000, '샴페인 1개', '없음'],
    [490000, 25000, '샴페인 1개', '없음'],
    [119000, 0, '없음', '샴페인 1개'],
    [35000, 0, '없음', '샴페인 1개'],
  ])(
    '총주문 금액이 120,000원 이상이면 증정 이벤트가 적용된다.',
    (total, gift, correct, incorrect) => {
      // when
      const giftOutput = Gift.calculateGift(total);
      const giftDetail = Gift.findOutGiftDetail(gift);

      // then
      expect(giftOutput).toBe(gift);
      expect(giftDetail).toBe(correct);
      expect(giftDetail).not.toBe(incorrect);
    },
  );

  test.each([
    [0, '없음'],
    [25000, '샴페인 1개'],
  ])('증정 메뉴가 없음 또는 샴페인 1개로 표시 된다.', (input, output) => {
    expect(Gift.findOutGiftDetail(input)).toBe(output);
  });
});
