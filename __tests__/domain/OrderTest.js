import Order from '../../src/domain/Order.js';

describe('주문 클래스 테스트', () => {
  test('메뉴판에 없는 메뉴를 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '알리오올리오-1';

    // then
    expect(() => {
      const order = new Order(INPUT);
      return order;
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test('메뉴의 개수가 1 미만이면 예외가 발생한다.', () => {
    // given
    const INPUT = '해산물파스타-0';

    // then
    expect(() => {
      const order = new Order(INPUT);
      return order;
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test('메뉴 형식이 다르면 예외가 발생한다.', () => {
    // given
    const INPUT = '해산물파스타-1,,--';

    // then
    expect(() => {
      const order = new Order(INPUT);
      return order;
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test('메뉴를 중복 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '해산물파스타-1,해산물파스타-1';

    // then
    expect(() => {
      const order = new Order(INPUT);
      return order;
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test('음료만 주문하면 예외가 발생한다.', () => {
    // given
    const INPUT = '제로콜라-1';

    // then
    expect(() => {
      const order = new Order(INPUT);
      return order;
    }).toThrow('[ERROR] 음료만 주문할 수 없습니다.');
  });

  test('메뉴가 총 20개를 초과하여 주문하면 예외가 발생한다.', () => {
    // given
    const INPUT = '티본스테이크-21';

    // then
    expect(() => {
      const order = new Order(INPUT);
      return order;
    }).toThrow('[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.');
  });
});
