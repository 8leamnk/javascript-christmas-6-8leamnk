const MESSAGE = {
  input: {
    date: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
    order:
      '주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
  },

  output: {
    intro: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
    preview: '에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
    order: '\n<주문 메뉴>',
    total: '\n<할인 전 총주문 금액>',
    gift: '\n<증정 메뉴>',
    benefit: '\n<혜택 내역>',
    benefitTotal: '\n<총혜택 금액>',
    payment: '\n<할인 후 예상 결제 금액>',
    badge: '\n<12월 이벤트 배지>',
  },

  error: {
    date: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
    order: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
    onlyDrink: '[ERROR] 음료만 주문할 수 없습니다.',
    orderNumber: '[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.',
  },
};

Object.freeze(MESSAGE.input);
Object.freeze(MESSAGE.output);
Object.freeze(MESSAGE.error);
Object.freeze(MESSAGE);

export default MESSAGE;
