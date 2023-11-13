const VALUE = {
  menu: {
    appetizer: new Map([
      ['양송이수프', 6000],
      ['타파스', 5500],
      ['시저샐러드', 8000],
    ]),
    main: new Map([
      ['티본스테이크', 55000],
      ['바비큐립', 54000],
      ['해산물파스타', 35000],
      ['크리스마스파스타', 25000],
    ]),
    dessert: new Map([
      ['초코케이크', 15000],
      ['아이스크림', 5000],
    ]),
    drink: new Map([
      ['제로콜라', 3000],
      ['레드와인', 60000],
      ['샴페인', 25000],
    ]),
    format: /([가-힣]+[-]{1}[0-9]+)/,
    range: {
      arrayLengthPerMenu: 2,
      min: 1,
      max: 20,
    },
  },

  gift: {
    detail: '샴페인 1개',
    condition: 120000,
  },

  discount: {
    condition: 10000,
    ddayIncreaseAmount: -100,
    dday: -1000,
    week: -2023,
    special: -1000,
  },

  benefit: {
    dday: '크리스마스 디데이 할인',
    weekday: '평일 할인',
    weekend: '주말 할인',
    special: '특별 할인',
    gift: '증정 이벤트',
  },

  badges: [
    [20000, '산타'],
    [10000, '트리'],
    [5000, '별'],
  ],

  month: 12,

  date: {
    friday: 1,
    saturday: 2,
    sunday: 3,
    week: 7,
    christmasDay: 25,
    range: {
      min: 1,
      max: 31,
    },
  },

  unit: {
    month: '월',
    date: '일',
    number: '개',
    won: '원',
  },

  hyphen: '-',

  comma: ',',
};

Object.freeze(VALUE.menu);
Object.freeze(VALUE.gift);
Object.freeze(VALUE.discount);
Object.freeze(VALUE.benefit);
Object.freeze(VALUE.badges);
Object.freeze(VALUE.date);
Object.freeze(VALUE.unit);
Object.freeze(VALUE);

export default VALUE;
