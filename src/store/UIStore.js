import { makeAutoObservable } from "mobx";

class UIStore {
  currentLanguage = "hr"; 

  constructor() {
    makeAutoObservable(this);
  }

  setLanguage(language) {
    this.currentLanguage = language;
  }
}

export default UIStore;