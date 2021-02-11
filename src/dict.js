const _ = require("underscore");

// base imports
const Item = require("./item");

class Dict {
  constructor() {
    this.items = {};
  }

  insert(key, value) {
    this.items[key] = new Item(key, value, this);
  }

  get(key) {
    return this.items[key];
  }

  remove(key) {
    delete this.items[key];
  }

  fetch() {
    let out = {};

    _.each(this.items, (value, key) => {
      out[key] = value.fetch();
    });

    return out;
  }
}

module.exports = Dict;