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

  test.each(
    '입력한 날짜가 정상적인 숫자 형태면 날짜 정보가 제대로 반환 된다.',
    () => {
      // given
      const INPUT = '25';
      const output = {
        date: 25,
        previewNotice:
          '12월 25일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
      };

      // when
      const dateObject = new Date(INPUT);
      const dateInfo = dateObject.findOutDateInfo();

      // then
      expect(dateInfo).toEqual(output);
    },
  );

  test.each(
    '입력한 날짜가 정상적인 숫자 형태면 날짜 정보가 다른 숫자로 반환되지 않는다.',
    () => {
      // given
      const INPUT = '15';
      const output = {
        date: 30,
        previewNotice:
          '12월 29일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
      };

      // when
      const dateObject = new Date(INPUT);
      const dateInfo = dateObject.findOutDateInfo();

      // then
      expect(dateInfo).not.toEqual(output);
    },
  );
});
