const MESSAGE = {
  input: {
    date: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
    menu: '주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
  },

  error: {
    date: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
    menu: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
    onlyBeverage: '[ERROR] 음료만 주문할 수 없습니다. 다시 입력해 주세요.',
    menuNumber:
      '[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다. 다시 입력해 주세요.',
  },
};

Object.freeze(MESSAGE.input);
Object.freeze(MESSAGE.error);
Object.freeze(MESSAGE);

export default MESSAGE;
