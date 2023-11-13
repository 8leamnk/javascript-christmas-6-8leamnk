import convertCurrencyUnit from '../../src/utils/convertUtils.js';

describe('1,000원 단위 금액으로 반환되는 함수를 테스트', () => {
  test.each([
    [1000000, '1,000,000원'],
    [0, '0원'],
    [1000, '1,000원'],
    [999, '999원'],
  ])('숫자가 1,000원 단위로 변환 된다.', (input, output) => {
    // when
    const stringOfCurrencyUnit = convertCurrencyUnit(input);

    // then
    expect(stringOfCurrencyUnit).toBe(output);
  });
});
