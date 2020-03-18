import Observable from "./observable.js";
import { productData } from "../model/mockData.js";

class VendingMachineModel extends Observable {
  constructor() {
    super();
    this.state = {
      accumulatedAmount: 0,
      targetValue: null,
      productNumber: "",
      productName: "",
      type: ""
    };
  }

  addEventWallet() {
    const target = event.target;
    const targetCount = Number(
      target.parentNode.querySelector(".count_index").textContent
    );
    if (!targetCount) return;
    this.state.targetValue = target.value;
    this.state.accumulatedAmount += Number(target.value);
    this.state.type = "wallet";
    this.notify(this.state);
  }

  addEventDial(dial, type) {
    if (type === "number") this.state.productNumber += dial;
    else if (type === "select") this.clickSelectDial(this.state.productNumber);
    else if (type === "cancel") this.state.productNumber = "";
  }

  clickSelectDial(number) {
    const productId = Number(number);
    if (!productId || productId > productData.length)
      return (this.state.productNumber = "");
    this.state.type = "dial";
    const filteringProduct = this.filterProduct(productId);

    if (this.state.accumulatedAmount < Number(filteringProduct.price)) {
      this.state.productNumber = "";
      this.state.type = "err";
      return this.notify(this.state);
    }

    this.state.productName = filteringProduct.name;
    this.state.accumulatedAmount -= Number(filteringProduct.price);
    this.notify(this.state);

    this.state.productNumber = "";
  }

  filterProduct(id) {
    const filteringProduct = productData.filter(
      product => product.id === id
    )[0];

    return { name: filteringProduct.name, price: filteringProduct.price };
  }
}

export default VendingMachineModel;
