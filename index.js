import _ from 'underscore';

export default class DictList {
    constructor() {
        this.items = {}
    }

    set(key, value) {
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
        })

        return out;
    }
}

class Item {
    constructor(key, value, dict) {
        this.key = key;
        this.value = value;
        this.dict = dict;
    }

    set(key, val) {
        this.value[key] = val;
    }

    fetch() {
        return this.value;
    }

    remove() {
        return this.dict.remove(this.key);
    }
}
