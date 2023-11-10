import Menu from '../src/Menu.js';

describe('메뉴 클래스 테스트', () => {
  test('문자열 메뉴가 배열로 잘 변환된다.', () => {
    // given
    const INPUT = '해산물파스타-2,레드와인-1, 초코케이크-1';
    const output = new Map([
      ['해산물파스타', 2],
      ['레드와인', 1],
      ['초코케이크', 1],
    ]);

    // when
    const menuObject = new Menu();
    const menu = menuObject.convertMenu(INPUT);

    // then
    expect(menu).toEqual(output);
  });
});
