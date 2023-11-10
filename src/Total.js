class Total {
  #total;

  constructor() {
    this.#total = 0;
  }

  calculateTotal(menu) {
    const totalOrderAmount = [...menu.values()].reduce(
      (acc, amount) => acc + amount,
      0,
    );

    this.#total = totalOrderAmount;

    return totalOrderAmount;
  }
}

export default Total;
