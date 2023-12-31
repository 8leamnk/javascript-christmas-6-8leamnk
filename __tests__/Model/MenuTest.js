import Menu from '../../src/Model/Menu.js';

describe('메뉴 클래스 테스트', () => {
  test('유효성 검사에서 문제가 없으면 Map 객체로 잘 반환된다.', () => {
    // given
    const INPUT =
      '양송이수프-1,티본스테이크-1,해산물파스타-1,아이스크림-2,제로콜라-1';
    const output = new Map([
      ['양송이수프', 1],
      ['티본스테이크', 1],
      ['해산물파스타', 1],
      ['아이스크림', 2],
      ['제로콜라', 1],
    ]);

    // when
    const menuObject = new Menu(INPUT);
    const { menu } = menuObject.findOutMenuInfo();

    // then
    expect(menu).toEqual(output);
  });

  test('유효성 검사가 끝난 후 주문 내역 가져오기', () => {
    // given
    const INPUT =
      '양송이수프-1,티본스테이크-1,해산물파스타-1,아이스크림-2,제로콜라-1';
    const OUTPUT =
      '양송이수프 1개\n티본스테이크 1개\n해산물파스타 1개\n아이스크림 2개\n제로콜라 1개';

    // when
    const menuObject = new Menu(INPUT);
    const { orderHistory } = menuObject.findOutMenuInfo();

    // then
    expect(orderHistory).toEqual(OUTPUT);
  });

  test.each([
    ['해산물파스타-2,화이트와인-1,초코케이크-1'],
    ['알리오올리오-1,레드와인-1,아이스크림-2'],
  ])('메뉴판에 없는 메뉴면 예외가 발생한다.', (input) => {
    expect(() => {
      new Menu(input);
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test.each([
    ['해산물파스타-0,레드와인-1,초코케이크-1'],
    ['바비큐립-1,아이스크림-a,시저샐러드-1'],
  ])('메뉴의 개수가 1 이상의 숫자가 아니면 예외가 발생한다.', (input) => {
    expect(() => {
      new Menu(input);
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test.each([
    ['해산물파스타-2,레드와인-1,초코케이크-->1'],
    ['바비큐립-1,,아이스크림-2,시저샐러드-1'],
    ['티본스테이크-1,레드와인,아이스크림-2,시저샐러드-1'],
    ['타파스-1-초코케이크-1,해산물파스타-2,샴페인-1'],
  ])('메뉴 형식에 맞지 않으면 예외가 발생한다.', (input) => {
    expect(() => {
      new Menu(input);
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test('중복 메뉴를 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '양송이수프-2,양송이수프-1,샴페인-1';

    // then
    expect(() => {
      new Menu(INPUT);
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test('모든 메뉴 개수의 합이 20개까지는 예외가 발생하지 않는다.', () => {
    // given
    const INPUT = '양송이수프-3,티본스테이크-3,바비큐립-4,제로콜라-10';
    const ERROR_MESSAGE =
      '[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다. (e.g. 시저샐러드-1, 티본스테이크-1, 크리스마스파스타-1, 제로콜라-3, 아이스크림-1의 총개수는 7개)';

    // then
    expect(() => {
      new Menu(INPUT);
    }).not.toThrow(ERROR_MESSAGE);
  });

  test('모든 메뉴 개수의 합이 20개가 초과되면 예외가 발생한다.', () => {
    // given
    const INPUT = '양송이수프-3,샴페인-1,티본스테이크-3,바비큐립-4,제로콜라-10';
    const ERROR_MESSAGE =
      '[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다. (e.g. 시저샐러드-1, 티본스테이크-1, 크리스마스파스타-1, 제로콜라-3, 아이스크림-1의 총개수는 7개)';

    // then
    expect(() => {
      new Menu(INPUT);
    }).toThrow(ERROR_MESSAGE);
  });

  test('음료만 주문하면 예외가 발생한다.', () => {
    // given
    const INPUT = '제로콜라-3,레드와인-2,샴페인-1';
    const ERROR_MESSAGE = '[ERROR] 음료만 주문 시, 주문할 수 없습니다.';

    // then
    expect(() => {
      new Menu(INPUT);
    }).toThrow(ERROR_MESSAGE);
  });
});
