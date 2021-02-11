class Item {
  constructor(key, value, dict) {
    this.key = key;
    this.value = value;
    this.dict = dict;
  }

  get(key) {
      return this.value[key];
  }

  update(key, val) {
    this.value[key] = val;
  }

  inc(key, val) {
    const [operator] = val.toString();

    if (operator == "-") {
        const value = val.toString().slice(1, val.length);

        this.value[key]  = this.value[key] - value;

        return;
    }

    this.value[key]  = this.value[key] + val;
  }

  fetch() {
    return this.value;
  }

  remove() {
    return this.dict.remove(this.key);
  }
}

module.exports = Item;