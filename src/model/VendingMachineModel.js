import Observable from "./observable.js";
import { productData } from "../model/mockData.js";

class VendingMachineModel extends Observable {
  constructor() {
    super();
    this.state = {
      accumulatedAmount: 0,
      targetValue: null,
      //targetValue 를 this.state data로 할당
      productNumber: "",
      productName: ""
      // productNumber 와 productName => Number로 판별하고 Name에 할당해서 view에 넘겨주기 위함
    };
  }

  addEventWallet() {
    const target = event.target;
    const targetCount = Number(
      target.parentNode.querySelector(".count_index").textContent
    ); //0개일때 증가되지 않도록 예외처리를 위함

    // console.log(target.nextElementSibling.textContent);

    if (!targetCount) return;

    //...누적금액 증가
    this.state.targetValue = target.value;
    this.state.accumulatedAmount += Number(target.value);

    this.notify(this.state);
  }
  addEventDial() {}
}

export default VendingMachineModel;
