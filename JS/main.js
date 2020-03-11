import Vmview from "./vmView.js";
import VmModle from "./vmModle.js";

const targetObj = {};

const vmModle = new VmModle();
const vmView = new Vmview(vmModle, targetObj);
