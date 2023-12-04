import Date from '../../src/domain/Date.js';

describe('예상 방문 날짜 클래스 테스트', () => {
  test('숫자를 입력하지 않으면 예외가 발생한다.', () => {
    // given
    const INPUT = 'e';

    // then
    expect(() => {
      const date = new Date(INPUT);
      return date;
    }).toThrow('[ERROR]');
  });

  test.each([['0'], ['32']])(
    '1 ~ 31 이외의 숫자를 입력하면 예외가 발생한다.',
    (input) => {
      expect(() => {
        const date = new Date(input);
        return date;
      }).toThrow('[ERROR]');
    },
  );
});
