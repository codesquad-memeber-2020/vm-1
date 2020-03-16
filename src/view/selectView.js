class SelectView {
  constructor(el, vendingModel) {
    this.element = el;
    this.vendingMachineModel = vendingModel;
    this.vendingMachineModel.subscribe(this.render.bind(this));

    this.init();
  }

  bindEvent() {
    const dial = this.element.querySelector(".choice_dial");

    dial.addEventListener("click", e => {
      if (e.target.tagName !== "BUTTON") return;
      console.log(`dial Event Click`);
      this.vendingMachineModel.addEventDial(e.target.innerText);
    });
  }

  render({ targetValue, accumulatedAmount, productName }) {
    // product Name도 인자로 넘겨받음
  }

  init() {
    this.bindEvent();
  }
}

export default SelectView;
