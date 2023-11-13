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

  test.each([
    ['3', { date: 3, monthAndDay: '12월 3일' }],
    ['25', { date: 25, monthAndDay: '12월 25일' }],
  ])(
    '입력한 날짜가 정상적인 숫자 형태면 날짜 정보가 제대로 반환 된다.',
    (input, output) => {
      // when
      const dateObject = new Date(input);
      const dateInfo = dateObject.findOutDateInfo();

      // then
      expect(dateInfo).toEqual(output);
    },
  );

  test.each([
    ['10', { date: 4, monthAndDay: '12월 4일' }],
    ['15', { date: 30, monthAndDay: '12월 29일' }],
  ])(
    '입력한 날짜가 정상적인 숫자 형태면 날짜 정보가 다른 숫자로 반환되지 않는다.',
    (input, output) => {
      // when
      const dateObject = new Date(input);
      const dateInfo = dateObject.findOutDateInfo();

      // then
      expect(dateInfo).not.toEqual(output);
    },
  );
});
