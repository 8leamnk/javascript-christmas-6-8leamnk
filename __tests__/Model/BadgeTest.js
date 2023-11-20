import Badge from '../../src/Model/Badge.js';

describe('이벤트 배지 테스트', () => {
  test.each([
    [-31246, '산타'],
    [-20001, '산타'],
    [-20000, '산타'],
    [-19999, '트리'],
    [-10001, '트리'],
    [-5001, '별'],
    [-5000, '별'],
  ])('총혜택 금액에 따라 이벤트 배지가 다르게 부여 된다.', (input, output) => {
    // when
    const badge = Badge.displayBadge(input);

    // then
    expect(badge).toBe(output);
  });

  test.each([[-4999], [-3000], [0]])(
    '이벤트 배지가 부여되지 않으면 없음으로 반환 된다.',
    (input) => {
      // given
      const OUTPUT = '없음';

      // when
      const badge = Badge.displayBadge(input);

      // then
      expect(badge).toBe(OUTPUT);
    },
  );
});
