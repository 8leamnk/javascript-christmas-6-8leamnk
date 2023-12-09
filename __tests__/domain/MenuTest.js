import Menu from '../../src/domain/Menu.js';

describe('식당 예상 방문 날짜 테스트', () => {
  test('메뉴판에 없는 값을 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '알리오올리오-2';

    // then
    expect(() => {
      const menu = new Menu(INPUT);
      return menu;
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test.each([['해산물파스타-?'], ['해산물파스타-0'], ['타파스-일']])(
    '각 메뉴의 개수가 1 이상이 아닌 값을 입력하면 예외가 발생한다.',
    (input) => {
      expect(() => {
        const menu = new Menu(input);
        return menu;
      }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    },
  );

  test('메뉴 형식을 지키지 않으면 예외가 발생한다.', () => {
    // given
    const INPUT = '초코케이크->2';

    // then
    expect(() => {
      const menu = new Menu(INPUT);
      return menu;
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test('중복으로 메뉴를 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '바비큐립-2,시저샐러드-1,바비큐립-2';

    // then
    expect(() => {
      const menu = new Menu(INPUT);
      return menu;
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test('음료만 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '제로콜라-2,레드와인-1,샴페인-2';

    // then
    expect(() => {
      const menu = new Menu(INPUT);
      return menu;
    }).toThrow('[ERROR] 음료만 주문할 수 없습니다. 다시 입력해 주세요.');
  });

  test('메뉴를 총 20개 넘게 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '양송이수프-10,티본스테이크-10,아이스크림-2';

    // then
    expect(() => {
      const menu = new Menu(INPUT);
      return menu;
    }).toThrow(
      '[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다. 다시 입력해 주세요.',
    );
  });
});
