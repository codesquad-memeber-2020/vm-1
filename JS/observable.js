class Observable {
  constructor() {
    this._observers = new Set();
  }
  subscribe(observer) {
    this._observers.add(observer);
  }
  unsubscribe(observer) {
    this._observers = [...this._observers].filter(
      subscriber => subscriber !== observer
    );
  }
  notify(data) {
    console.log("data is", data);
    console.log("notify", this._observers);
    this._observers.forEach(observer => observer(data));
  }
}

export default Observable;
