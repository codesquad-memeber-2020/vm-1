class WalletView {
  constructor(el, walletModel, vendingModel) {
    this.element = el;
    this.walletModel = walletModel;
    this.vendingMachineModel = vendingModel;

    this.walletModel.subscribe(this.render.bind(this));
  }

  bindEvent() {
    this.element.querySelector(".wallet_list").addEventListener("click", e => {
      if (e.target.tagName !== "BUTTON") return;

      this.walletModel.addEvent(e);
      this.vendingMachineModel.addEventWallet();
    });
  }

  render({ userWalletList, userWalletSum }) {
    const walletListHTML =
      userWalletList.reduce((html, item) => {
        return (html += `
          <li>
            <button value="${item.name}">${item.name}원</button>
            <span class="count_index">${item.count}</span>
          </li>
        `);
      }, '<ul class="wallet_list">') +
      `</ul>
        <div class="wallet_sum">${userWalletSum}</div>
      `;

    this.element.innerHTML = walletListHTML;

    this.bindEvent();
  }
}

export default WalletView;
