const VALUE = Object.freeze({
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

  none: '없음',

  gift: {
    content: [['샴페인', 1]],
    condition: 120000,
  },

  unit: {
    number: '개',
  },
});

export default VALUE;
