import ProductView from "./view/productView.js";
import SelectView from "./view/selectView.js";
import WalletView from "./view/walletView.js";

import VendingMachineModel from "./model/VendingMachineModel.js";
import WalletModel from "./model/walletModel.js";

import VM from "./constant/vmConstant.js";

const _ = {
  productEle: document.querySelector(".product_screen"),
  selectEle: document.querySelector(".choice_screen"),
  walletEle: document.querySelector(".customer_wallet")
};

const vendingMachineModel = new VendingMachineModel();
const walletModel = new WalletModel();

const productView = new ProductView(_.productEle, vendingMachineModel);
const selectView = new SelectView(_.selectEle, vendingMachineModel);
const walletView = new WalletView(
  _.walletEle,
  walletModel,
  vendingMachineModel
);

walletModel.initFetch(VM.URL);
vendingMachineModel.initFetch(VM.URL);
