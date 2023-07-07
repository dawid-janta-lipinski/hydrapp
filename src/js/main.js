import { registerSW } from "./pwa.js";
registerSW();

class Glass {
  constructor() {
    this.counter = document.querySelector(".counter__js");
    this.buttonAdd = document.querySelector(".add__js");
    this.buttonDelete = document.querySelector(".delete__js");
    this.key = new Date().toLocaleString().slice(0, 10);
    this.currentGlassCounter = 0;
  }
  init() {
    this.getCurrentGlassCounter(localStorage.getItem(this.key));
    this.setCurrentGlassCounter();
    this.buttonAdd.addEventListener("click", () => {
      this.addGlass();
    });
    this.buttonDelete.addEventListener("click", () => {
      this.deleteGlass();
    });
  }
  getCurrentGlassCounter(localStorageValue) {
    if (localStorageValue) {
      this.currentGlassCounter = localStorageValue;
    } else localStorage.setItem(this.key, 0);
  }
  setCurrentGlassCounter() {
    this.counter.innerHTML = this.currentGlassCounter;
    if (this.currentGlassCounter !== 0) localStorage.setItem(this.key, this.currentGlassCounter);
  }
  addGlass() {
    this.currentGlassCounter++;
    this.setCurrentGlassCounter();
  }
  deleteGlass() {
    this.currentGlassCounter--;
    if (this.currentGlassCounter < 0){
        this.currentGlassCounter = 0;
    } 
    this.setCurrentGlassCounter();
  }
}
const glass = new Glass();
glass.init();
