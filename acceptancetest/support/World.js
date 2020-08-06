import { setWorldConstructor } from 'cucumber';

class World {
  constructor() {
    this.pages = {};
  }

  setPage(name, page) {
    this.pages[name] = page;
  }

  getPage(name) {
    return this.pages[name];
  }
};

setWorldConstructor(World);