import Date from '../../src/Model/Date.js';

describe('사용자가 입력한 날짜 테스트', () => {
  test.each([['룰루랄라'], ['abcd']])(
    '숫자가 아닌 값을 입력하면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Date(input);
      }).toThrow('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    },
  );

  test.each([['0'], ['-1']])(
    '1 미만의 숫자를 입력하면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Date(input);
      }).toThrow('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    },
  );

  test.each([['32'], ['123']])(
    '32 이상의 숫자를 입력하면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Date(input);
      }).toThrow('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    },
  );
});
