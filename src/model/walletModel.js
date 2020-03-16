import Observable from "./observable.js";
import { walletData } from "../model/mockData.js";

class WalletModel extends Observable {
  constructor() {
    super();
    this.walletData = {
      userWalletList: walletData,
      userWalletSum: 0
    };
  }

  init() {
    //DOM이 로드될때 최초 실행
    this.notify(this.walletData);
  }

  addEvent(event) {
    //이벤트가 일어났을떄 호출되는 메서드

    //... walletData count 조작 (차감)

    this.notify(this.walletData);
  }
}

export default WalletModel;
