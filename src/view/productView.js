class ProductView {
  constructor(el, vendingModel) {
    this.element = el;
    this.vendingMachineModel = vendingModel;
    this.vendingMachineModel.subscribe(this.render.bind(this));
  }
  render({ accumulatedAmount }) {
    this.active(accumulatedAmount);
  }

  active(acc) {
    // active 기능 메서드
  }
}

export default ProductView;
