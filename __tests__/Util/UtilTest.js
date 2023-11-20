import Util from '../../src/Util/Util.js';

describe('유틸 객체 테스트', () => {
  test.each([
    [1000000, '1,000,000원'],
    [0, '0원'],
    [1000, '1,000원'],
    [999, '999원'],
  ])(
    '1,000원 단위 금액으로 반환되는 메서드 - 숫자가 1,000원 단위로 변환 된다.',
    (input, output) => {
      // when
      const stringOfCurrencyUnit = Util.convertCurrencyUnit(input);

      // then
      expect(stringOfCurrencyUnit).toBe(output);
    },
  );

  test('우테코 식당의 모든 메뉴를 가져오는 메서드 - 우테코 식당의 모든 메뉴가 Map 객체로 반환 된다.', () => {
    // given
    const output = new Map([
      ['양송이수프', 6000],
      ['타파스', 5500],
      ['시저샐러드', 8000],
      ['티본스테이크', 55000],
      ['바비큐립', 54000],
      ['해산물파스타', 35000],
      ['크리스마스파스타', 25000],
      ['초코케이크', 15000],
      ['아이스크림', 5000],
      ['제로콜라', 3000],
      ['레드와인', 60000],
      ['샴페인', 25000],
    ]);

    // when
    const allMenus = Util.getAllMenus();

    // then
    expect(allMenus).toEqual(output);
  });
});
