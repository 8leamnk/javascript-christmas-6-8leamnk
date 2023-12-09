import Date from '../../src/domain/Date.js';

describe('식당 예상 방문 날짜 테스트', () => {
  test.each([['e'], ['?']])(
    '숫자가 아닌 값을 입력하면 예외가 발생한다.',
    (input) => {
      expect(() => {
        const date = new Date(input);
        return date;
      }).toThrow('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    },
  );

  test.each([['0'], ['32']])(
    '1 ~ 31의 숫자가 아닌 값을 입력하면 예외가 발생한다.',
    (input) => {
      expect(() => {
        const date = new Date(input);
        return date;
      }).toThrow('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    },
  );
});
