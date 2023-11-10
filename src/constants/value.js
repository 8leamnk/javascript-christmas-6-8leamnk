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
      min: 1,
      max: 19,
    },
  },

  gift: {
    detail: '샴페인 1개',
    condition: 120000,
  },

  unit: {
    number: '개',
    won: '원',
  },
};

Object.freeze(VALUE.menu);
Object.freeze(VALUE.gift);
Object.freeze(VALUE.unit);
Object.freeze(VALUE);

export default VALUE;