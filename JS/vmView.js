class vmView {
  constructor(model, targetObj) {
    this.targetObj = targetObj;
    this.model = model;
    this.model.subscribe(this.render.bind(this));
  }
  render(dataObj) {}
}
